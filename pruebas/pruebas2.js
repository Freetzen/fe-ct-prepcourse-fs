function sumarLikesDeUsuario(objetoUsuario) {

  let totalLikes = 20;

  for (let i = 0; i < objetoUsuario.posts.length; i++){
   totalLikes = totalLikes + objetoUsuario.posts[i].likes
  }
  console.log(totalLikes)
  return totalLikes

}

objetoUsuario = {
  posts: [post = {likes:10}, post = {likes: 5}, post = {likes:5}]
}


sumarLikesDeUsuario(objetoUsuario)