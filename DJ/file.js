//
// const getResourceWithDetails = async(req,res)=>{
//     try{
// const resources = await Resource.find({is_deleted:false}).select('project user')

// const token = await userService.getToken('admin', config.logins.password)
        


//         const detailedResources = await Promise.all(resources.map(async resource => {
//             try {
//                 const user = await userService.getUserErp(token, resource.user);
//                 return {
//                     _id: resource._id,
//                     project: resource.project,
//                     user: `${user[0].first_name} ${user[0].last_name}` // Assuming getUserErp returns an array
//                 };
//             } catch (error) {
//                 console.error(`Error fetching user for resource ${resource._id}:`, error);
//                 return {
//                     _id: resource._id,
//                     project: resource.project,
//                     user: null // Or some default value
//                 };
//             }
//         }));

// res.status(200).json({success:true, data:detailedResources})
//     } catch(err){
//         console.error(err);
//         res.status(500).json({ message: 'Server side error' });
//     }
// } /////////////