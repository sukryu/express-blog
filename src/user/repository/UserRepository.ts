import { AppDataSource } from "src/datasource";
import { UserEntity } from "src/entities/UserEntity";

export class UserRepository {
    constructor(
        private readonly repository = AppDataSource.getRepository(UserEntity),
    ) {}

    public async findOneById(userId: string): Promise<UserEntity> {
        try {
            const user = await this.repository.findOne({ where: { id: userId }});
            if (!user) {
                throw new Error(`User not found. With ID: ${userId}`);
            }

            return user;
        } catch (error) {
            throw new Error(error);
        }
    }

    public async findByEmail(email: string): Promise<UserEntity> {
        try {
            const user = await this.repository.findOne({ where: { email }});
            if (!user) {
                throw new Error(`User not found. With Email: ${email}`);
            }
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }

    public async create(data: UserEntity): Promise<UserEntity> {
        try {
            const user = await this.repository.create(data);
            if (!user) {
                throw new Error(`An error occured when creating user.`);
            }

            return await this.repository.save(user);
        } catch (error) {
            throw new Error(error);
        }
    }
}