import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateJobsTable1618771301779 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: 'jobs',
      columns: [
        {
          name: 'id',
          type: 'bigint',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        { name: 'first_name', type: 'varchar', length: '191' },
        { name: 'last_name', type: 'varchar', length: '191' },
        { name: 'email', type: 'varchar', length: '191' },
        { name: 'password', type: 'varchar', length: '191' },
        { name: 'role_id', type: 'bigint' },
      ],
    });

    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('jobs');
  }
}
