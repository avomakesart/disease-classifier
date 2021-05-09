import {
  Arg,
  Ctx,
  Field,
  InputType,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';
import { getConnection } from 'typeorm';
import { BloodPressure } from '../entities';
import { MyContext } from '../types';

@InputType()
class BloodPressureInput {
  @Field()
  sysBp: number;
  @Field()
  diaBp: number;
  @Field()
  atDate: string;
}

@ObjectType()
class PaginatedBloodPressure {
  @Field(() => [BloodPressure])
  bloodPressure: BloodPressure[];
  @Field()
  hasMore: boolean;
}

@Resolver(BloodPressure)
export class BloodPressureResolver {
  @Mutation(() => BloodPressure)
  async createBloodPressure(
    @Arg('input') input: BloodPressureInput
  ): Promise<BloodPressure> {
    return BloodPressure.create({ ...input }).save();
  }

  @Mutation(() => BloodPressure, { nullable: true })
  async updateBloodPressure(
    @Arg('id', () => Int) id: number,
    @Arg('input') input: BloodPressureInput
  ): Promise<BloodPressure | null> {
    const result = await getConnection()
      .createQueryBuilder()
      .update(BloodPressure)
      .set({ ...input })
      .where('id = :id', { id })
      .returning('*')
      .execute();

    return result.raw[0];
  }

  @Query(() => PaginatedBloodPressure)
  async bloodPressures(
    @Arg('limit', () => Int) limit: number,
    @Arg('cursor', () => String, { nullable: true }) cursor: string | null,
    @Ctx() {}: MyContext
  ): Promise<PaginatedBloodPressure> {
    const realLimit = Math.min(50, limit);
    const realLimitPlusOne = realLimit + 1;

    const replacements: any[] = [realLimitPlusOne];

    if (cursor) {
      replacements.push(new Date(parseInt(cursor)));
    }

    const bloodPressure = await getConnection().query(
      `
        select b.*
        from blood_pressure b   
        ${cursor ? `where b."createdAt" < $2` : ''}
        order by b."createdAt" ASC
        limit $1
      `,
      replacements
    );

    return {
      bloodPressure: bloodPressure.slice(0, realLimit),
      hasMore: bloodPressure.length === realLimitPlusOne,
    };
  }

  @Query(() => BloodPressure, { nullable: true })
  bloodPressure(
    @Arg('id', () => Int) id: number
  ): Promise<BloodPressure | undefined> {
    return BloodPressure.findOne(id);
  }

  @Mutation(() => Boolean)
  async deleteBloodPressure(
    @Arg('id', () => Int) id: number
  ): Promise<boolean> {
    await BloodPressure.delete({ id });
    return true;
  }
}
