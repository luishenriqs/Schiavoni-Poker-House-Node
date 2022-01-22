import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTable1642816956171 implements MigrationInterface {
    name = 'AlterTable1642816956171'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "games" DROP CONSTRAINT "FK_10a66f080f04cbae1a48fbe995f"`);
        await queryRunner.query(`ALTER TABLE "games" DROP COLUMN "user_name"`);
        await queryRunner.query(`ALTER TABLE "games" ADD "user_name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "games" DROP COLUMN "user_name"`);
        await queryRunner.query(`ALTER TABLE "games" ADD "user_name" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "games" ADD CONSTRAINT "FK_10a66f080f04cbae1a48fbe995f" FOREIGN KEY ("user_name") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
