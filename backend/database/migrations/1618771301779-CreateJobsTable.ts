import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateJobsTable1618771301779 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: 'jobs',
      columns: [
        {
          name: "id",
          type: "uuid",
          isPrimary: true,
          isUnique: true,
          generationStrategy: 'uuid'
        },
        { name: 'position', type: 'varchar', length: '191' },
        { name: 'company', type: 'varchar', length: '191' },
        { name: 'status', type: 'varchar', length: '191' },
        { name: 'location', type: 'varchar', length: '191' },
        { name: 'requirements', type: 'varchar', length: '191' },
        { name: 'is_startup_company', type: 'boolean' },
      ],
    });

    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('jobs');
  }
}
