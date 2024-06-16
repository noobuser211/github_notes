@include('admin.header')
<link href="{{url('summernote/summernote-lite.css')}}" rel="stylesheet" />
@include('admin.sidebar')
        <!-- /. NAV SIDE  -->
        <div id="page-wrapper" >
            <div id="page-inner">
                <div class="row">
                    <div class="col-md-12">
                     <h2>{{$page_title}}</h2>   
                    </div>
                    <div class="container-fluid col-lg-10">
                    <?php if($row): ?>
                    <form action="" method="post" enctype="multipart/form-data">
                        {{ $row }}
                        @if($errors->all())
                        <div class="alert alert-danger text-center">
                            @foreach($errors->all() as $error)
                                {{$error}}<br>
                            @endforeach
                        </div>
                        @endif
 
                        <div class="form-group row">
                            <label for="title" class="col-sm-2 col-form-label">Post Title</label>
                            <div class="col-sm-10">
                            <input value="{{$row->title}}" type="text" class="form-control" placeholder="Title" id="title" name="title" autofocus><br>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="file" class="col-sm-2 col-form-label">Featured Image</label>
                            <div class="col-sm-10">
                                <input type="file" id="file" class="form-control" name="file">
                                <img src="{{url('uploads/'.$row->image)}}" style="width: 200px;">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="category_id" class="col-sm-2 col-form-label">Post Category</label>
                            <div class="col-sm-10">
                                <select id="category_id" name="category_id" class="form-control">
                                    <option value="{{$row->category_id}}">{{$category->category}}</option>
                                </select>
                            </div>
                        </div>

                        <br style="clear:both">
                        <h4>Post Content</h4>
                        @csrf
                        <textarea name="content" id="summernote">{{$row->content}}</textarea>

                        <input class="btn btn-primary" type="submit" value="Save">
                        <a href="{{url('admin/posts')}}">
                            <input class="btn btn-success" type="button" value="Back" style="float: right;">                            
                        </a>
                    </form>
                    <?php else: ?>
                    <br>
                    <h4>Sorry, could not find that category.</h4>
                    <br>
                    <a href="{{url('admin/categories')}}">
                        <input class="btn btn-success" type="button" value="Back">                            
                    </a>
                    <?php endif; ?>
                    </div>
                </div>              
                 <!-- /. ROW  -->
                  <hr />
              
                 <!-- /. ROW  -->           
    </div>
             <!-- /. PAGE INNER  -->
            </div>
         <!-- /. PAGE WRAPPER  -->
        </div>
@include('admin.footer')
<script src="{{url('summernote/summernote-lite.js')}}"></script>

<script>
    $(document).ready(function() {
        $('#summernote').summernote({height: 400});
    });
</script>