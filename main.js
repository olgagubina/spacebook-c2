var posts = [];
var id = 1;
var  commId= 1;



// TO ADD POST TO THE POSTS.array
function addPost (text, id) {
    posts.push(
        {
        "text": text,
        "id": id,
        "commentsList": []
        }
    );
}

//TO MAKE COMMENTS HTML
function getCommentsHTML(comments) {
    var htmlComments = '<div>';

    for (let n = 0; n <comments.length; n++) {
        htmlComments += `<p>
                        <span>${comments[n].username}: </span><br>
                        ${comments[n].commtext} 
                        <button type="button" class="btn btn-primary remove-comment">X</button>
                        </p>`;
    }
    return htmlComments +"</div>";
}

// TO ADD POST TO THE HTML-list
function renderPosts() {
    $('.posts').html('');
    for (var i=0; i<posts.length; i++) {
        $('.posts').append(`<p class="post" data-postid="${posts[i].id}"> 
                            ${posts[i].text}        
                            <button type="button" class="btn btn-primary remove" data-postid="${posts[i].id}">REMOVE</button>
                            </p><br>

                            <form class="form-group comment-form" data-post-id="${posts[i].id}">
                            <input type="text" class="form-control name" placeholder="Your name" data-postid="${posts[i].id}">
                            <input type="text" class="form-control comment" placeholder="Your comment" data-postid="${posts[i].id}">
                            <br><button type="button" class="btn btn-primary add-comment" data-postid="${posts[i].id}"> Comment</button>
                            </form>
        
                            ${getCommentsHTML(posts[i].commentsList)}`);
    }
    bindEvent();
}

// TO POST NEW POST
function postPost() {
    addPost($("#post-name").val(), id);
    renderPosts();

    console.log(posts);
    $('#post-name').val('');
    id+=1;
}

//TO REMOVE POST
function removePost(){
    var elemId=$(this).data().postid; 
    for (var elemObj in posts){
        if(posts[elemObj].id=== elemId) {
        posts.splice(elemObj,1);
        break;
        }
    }
    renderPosts();
}

//TO ADD COMMENT TO THE POSTS.array
function addComment (postId, idComment, nameComment, textComment) {
    for (var elemObj in posts){
        if(posts[elemObj].id===postId) {
            posts[elemObj].commentsList.push(         
                {
                "comID": idComment,
                "username": nameComment,
                "commtext": textComment
                });
        }
    }
    console.log(posts);
}

//TO FIND THE POST OF THE COMMENT

function findPost (postId) { 
    for (var i = 0; i < posts.length; i++) {
        if (posts[i].id === postId) {
            return posts[i];
        }
    }
}

//TO POST COMMENT
function postComment() {
    var postId=$(this).data().postid;
    addComment(postId, commId, $('.name').val(), $('.comment').val());
    renderPosts(postId);

    $('.name').val('');
    $('.comment').val('');
    commId+=1;
}

$(".add-post").click(postPost);
var bindEvent = function() {
    $('.remove').click(removePost);
    $('.add-comment').click(postComment);
}

//Add a feature that allows each post to receive a comment. Each post will require it's own form, 
//allowing a user to leave their username and some kind of comment text. 
//List all the comments and associated users below the post.



