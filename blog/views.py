from django.contrib import messages
from django.contrib.auth.models import User
from django.shortcuts import render, redirect, get_object_or_404
from .models import Post, Comment
from .forms import CommentForm
from .forms import PostForm


def blog_view(request):
    posts = Post.objects.all()
    comment_form = CommentForm()
    return render(request, 'blog.html', {'posts': posts, 'comment_form': comment_form})


def criar_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.autor = request.user  # Set the autor field to the logged-in user
            post.save()
            return redirect('blog_view')
    else:
        form = PostForm()
    return render(request, 'criar_post.html', {'form': form})


def like_post(request, post_id):
    post = Post.objects.get(id=post_id)
    post.likes += 1
    post.save()
    return redirect('blog_view')


def remover_post(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    post.delete()
    return redirect('blog_view')


def create_comment(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            autor = request.user
            conteudo = form.cleaned_data['conteudo']
            comment = Comment.objects.create(post=post, autor=autor, conteudo=conteudo)
            post.comments.add(comment)
            return redirect('blog_view')
    else:
        form = CommentForm()

    context = {
        'form': form,
        'post_id': post_id,  # Pass the post_id to the template context
    }
    return render(request, 'create_comment.html', context)




def delete_comment(request, comment_id):
    comment = get_object_or_404(Comment, id=comment_id)
    post_id = comment.post.id
    comment.delete()
    messages.success(request, 'Comment deleted successfully.')
    return redirect('blog_view')
