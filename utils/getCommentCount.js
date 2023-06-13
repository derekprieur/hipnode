export const getCommentCount = (post) => {
    return post?.comments?.reduce((count, comment) => {
        count += 1;

        if (comment.replies) {
            count += comment.replies.length;
        }

        return count;
    }, 0);
}