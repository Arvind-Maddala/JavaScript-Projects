const http = new easyHTTP;

//Get posts
 http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts){
   if(err){
    console.log(err)
   }else {
    console.log(posts)
   }
  
});

//create data
const data = {
  title: 'Custom post',
  body: 'This is a custom post'
};

//Post data
http.post('https://jsonplaceholder.typicode.com/posts',data,function (err, post){
     if(err){
      console.log(err)
     }else {
      console.log(post)
     }   
  });


//update data

http.put('https://jsonplaceholder.typicode.com/posts/5',data,function (err, post){
     if(err){
      console.log(err)
     }else {
      console.log(post)
     }
    
  });

//Delete posts
 http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response){
   if(err){
    console.log(err)
   }else {
    console.log(response)
   }
  
});