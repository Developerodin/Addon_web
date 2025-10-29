import { ExecArgs } from "@medusajs/framework/types";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils";

/**
 * Script to query and show the actual error from failed import jobs
 */
export default async function debugImportError({ container }: ExecArgs) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER);
  const query = container.resolve(ContainerRegistrationKeys.QUERY);
  
  try {
    console.log("\n═══════════════════════════════════════════");
    console.log("📋 CHECKING IMPORT JOBS");
    console.log("═══════════════════════════════════════════\n");
    
    // Try to query using entity manager
    const manager = container.resolve("manager");
    
    if (manager) {
      const queryRunner = manager.connection.createQueryRunner();
      
      try {
        const result = await queryRunner.query(`
          SELECT 
            id, 
            type, 
            status, 
            created_at, 
            updated_at, 
            result, 
            context,
            completed_at,
            failed_at
          FROM batch_job 
          WHERE type = 'import-product'
          ORDER BY created_at DESC 
          LIMIT 5
        `);
        
        console.log(`Found ${result.length} recent import jobs:\n`);
        
        for (const job of result) {
          console.log("═══════════════════════════════════════════");
          console.log(`Job ID: ${job.id}`);
          console.log(`Status: ${job.status}`);
          console.log(`Created: ${job.created_at}`);
          console.log(`Failed at: ${job.failed_at || 'N/A'}`);
          
          if (job.result) {
            try {
              const resultData = typeof job.result === 'string' 
                ? JSON.parse(job.result) 
                : job.result;
              console.log("\nResult:", JSON.stringify(resultData, null, 2));
            } catch (e) {
              console.log("\nResult (raw):", job.result);
            }
          }
          
          if (job.context) {
            try {
              const contextData = typeof job.context === 'string' 
                ? JSON.parse(job.context) 
                : job.context;
              console.log("\nContext:", JSON.stringify(contextData, null, 2));
            } catch (e) {
              console.log("\nContext (raw):", job.context);
            }
          }
          
          console.log("═══════════════════════════════════════════\n");
        }
      } finally {
        await queryRunner.release();
      }
    }
  } catch (error) {
    console.error("\nError querying jobs:", error);
    logger.error("Error querying jobs", { error });
  }
}
