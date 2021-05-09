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
import { KidneyMeasure } from '../entities';
import { MyContext } from '../types';

@InputType()
class KidneyMeasureInput {
  @Field()
  eGFR: number;
  @Field()
  atDate: string;
}

@ObjectType()
class PaginatedKidneyMeasure {
  @Field(() => [KidneyMeasure])
  kidneyMeasure: KidneyMeasure[];
  @Field()
  hasMore: boolean;
}

@Resolver(KidneyMeasure)
export class KidneyMeasureResolver {
  @Mutation(() => KidneyMeasure)
  async createKidneyMeasure(
    @Arg('input') input: KidneyMeasureInput
  ): Promise<KidneyMeasure> {
    return KidneyMeasure.create({ ...input }).save();
  }

  @Mutation(() => KidneyMeasure, { nullable: true })
  async updateKidneyMeasure(
    @Arg('id', () => Int) id: number,
    @Arg('input') input: KidneyMeasureInput
  ): Promise<KidneyMeasure | null> {
    const result = await getConnection()
      .createQueryBuilder()
      .update(KidneyMeasure)
      .set({ ...input })
      .where('id = :id', { id })
      .returning('*')
      .execute();

    return result.raw[0];
  }

  @Query(() => PaginatedKidneyMeasure)
  async kidneyMeasures(
    @Arg('limit', () => Int) limit: number,
    @Arg('cursor', () => String, { nullable: true }) cursor: string | null,
    @Ctx() {}: MyContext
  ): Promise<PaginatedKidneyMeasure> {
    const realLimit = Math.min(50, limit);
    const realLimitPlusOne = realLimit + 1;

    const replacements: any[] = [realLimitPlusOne];

    if (cursor) {
      replacements.push(new Date(parseInt(cursor)));
    }

    const kidneyMeasure = await getConnection().query(
      `
          select k.*
          from kidney_measure k   
          ${cursor ? `where k."createdAt" < $2` : ''}
          order by k."createdAt" ASC
          limit $1
        `,
      replacements
    );

    return {
      kidneyMeasure: kidneyMeasure.slice(0, realLimit),
      hasMore: kidneyMeasure.length === realLimitPlusOne,
    };
  }

  @Query(() => KidneyMeasure, { nullable: true })
  kidneyMeasure(
    @Arg('id', () => Int) id: number
  ): Promise<KidneyMeasure | undefined> {
    return KidneyMeasure.findOne(id);
  }

  @Mutation(() => Boolean)
  async deleteKidneyMeasure(
    @Arg('id', () => Int) id: number
  ): Promise<boolean> {
    await KidneyMeasure.delete({ id });
    return true;
  }
}
