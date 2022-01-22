import {MigrationInterface, QueryRunner} from "typeorm";

export class FirstTable1642816606775 implements MigrationInterface {
    name = 'FirstTable1642816606775'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "is_admin" boolean NOT NULL, "is_active" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "games" ("id" SERIAL NOT NULL, "game_number" integer NOT NULL, "classification" character varying NOT NULL, "user_id" integer NOT NULL, "user_name" integer NOT NULL, "points" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c9b16b62917b5595af982d66337" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "games" ADD CONSTRAINT "FK_c26f4ceea870c6b52d767c2e24f" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "games" ADD CONSTRAINT "FK_10a66f080f04cbae1a48fbe995f" FOREIGN KEY ("user_name") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "games" DROP CONSTRAINT "FK_10a66f080f04cbae1a48fbe995f"`);
        await queryRunner.query(`ALTER TABLE "games" DROP CONSTRAINT "FK_c26f4ceea870c6b52d767c2e24f"`);
        await queryRunner.query(`DROP TABLE "games"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
