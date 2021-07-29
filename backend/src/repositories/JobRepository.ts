import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';

@Service()
export class JobRepository {
  constructor(@InjectRepository() private userRepository: UserRepository, @EventDispatcher() private eventDispatcher: EventDispatcherInterface) {
    //
  }

  public async getAll(resourceOptions?: object) {
    return await this.userRepository.getManyAndCount(resourceOptions);
  }

  public async findOneById(id: number, resourceOptions?: object) {
    return await this.getRequestedUserOrFail(id, resourceOptions);
  }

  public async create(data: object) {
    let user = await this.userRepository.createUser(data);

    this.eventDispatcher.dispatch('onUserCreate', user);

    return user;
  }

  public async updateOneById(id: number, data: object) {
    const user = await this.getRequestedUserOrFail(id);

    return await this.userRepository.updateUser(user, data);
  }

  public async deleteOneById(id: number) {
    return await this.userRepository.delete(id);
  }

  private async getRequestedUserOrFail(id: number, resourceOptions?: object) {
    let user = await this.userRepository.getOneById(id, resourceOptions);

    if (!user) {
      throw new UserNotFoundException();
    }

    return user;
  }
}
