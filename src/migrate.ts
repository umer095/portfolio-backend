import {CmsPortfolioApplication} from './application'; // ✅ updated class name

export async function migrate(args: string[]) {
  const existingSchema = args.includes('--rebuild') ? 'drop' : 'alter';
  console.log('Migrating schemas (%s existing schema)', existingSchema);

  const app = new CmsPortfolioApplication(); // ✅ use correct class
  await app.boot();
  await app.migrateSchema({existingSchema});

  // Exit process after migration
  process.exit(0);
}

migrate(process.argv).catch(err => {
  console.error('Cannot migrate database schema', err);
  process.exit(1);
});
