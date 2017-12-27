var posts = [];
var text = $("#post-name").val();
var id = 1;
var bindEvent = function() {
    $('.remove').off();
    $('.remove').click(removePost);
}

// TO ADD POST TO THE POSTS.array
function addPost (text, id) {
    posts.push(
        {
        "text": text,
        "id": id
        }
    );
}

// TO ADD POST TO THE HTML-list
function renderPosts() {
    $('.posts').html('');
    for (var i=0; i<posts.length; i++) {
        $('.posts').append('<p class="post" data-id="'+ posts[i].id + '"><button type="button" class="btn btn-primary remove">REMOVE</button> #' + posts[i].id + ' ' + posts[i].text + '</p>');
    }
    bindEvent();
    // console.log($('.posts'));
}

// TO POST NEW POST
function postPost() {
    addPost($("#post-name").val(), id);
    renderPosts();

    // console.log(posts);
    $('#post-name').val('');
    id+=1;
}

//TO REMOVE POST
function removePost(){
    // elemId=$(this).closest('p').data().id;
    // console.log(elemId);
    // console.log(posts);
    // console.log($.inArray(elemId+"", posts));
    var elemID=$(this).closest('p').data().id;
    for (var elemObj in posts){
        if(posts[elemObj].id=== elemID) {
        posts.splice(elemObj,1);
        break;
        }
    }
    renderPosts();
}

$(".add-post").click(postPost);



