import User from '../models/user';

class UserController {
   /* eslint-disable no-param-reassign */

   /**
    * 查询所有用户
    * @param {ctx} Koa Context
    */
   async find(ctx) {
     ctx.body = await User.find();
   }

   /**
    * 查询一个用户
    * @param {ctx} Koa Context
    */
   async findById(ctx) {
     try {
       const user = await User.findById(ctx.params.id);
       if (!user) {
         ctx.throw(404);
       }
       ctx.body = user;
     } catch(err) {
      if(err.name ==='CastError' || err.name === 'NotFoundError') {
        ctx.throw(404);
      }
      ctx.throw(500);
     }
   }

   /**
    * 插入一条数据
    * @param {ctx} Koa Context 
    */
   async add(ctx) {
     try {
       const user = await new User(ctx.request.body).save();
       ctx.body = user;
     } catch (err) {
       ctx.throw(422);
     }
   }

   /**
    * 修改一条数据
    * @param {ctx} Koa Context
    */
   async update(ctx) {
     try {
       const user = await User.findByIdAndUpdate(
         ctx.params.id,
         ctx.request.body
       );
       if (!user) {
         ctx.throw(404);
       }
       ctx.body = user;
     } catch (err) {
       if (err.name === 'CastError' || err.name === 'NotFoundError') {
         ctx.throw(404);
       }
       ctx.throw(500);
     }
   }

   /**
    * 删除用户
    * @param {ctx} Koa Context 
    */
   async delete(ctx) {
     try {
       const user = await User.findByIdAndRemove(ctx.params.id);
       if (!user) {
         ctx.thrw(404);
       }
       ctx.body = user;
     } catch (err) {
       if (err.name === 'CastError' || err.name === 'NotFoundError') {
         ctx.throw(404);
       }
       ctx.throw(500);
     }
   }

  /* eslint-enable no-param-reassign */
}

export default new UserController();