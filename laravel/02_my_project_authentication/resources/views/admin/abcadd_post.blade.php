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
                    <form action="" method="post" enctype="multipart/form-data">
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
                            <input value="{{old('title')}}" type="text" class="form-control" placeholder="Title" id="title" name="title" autofocus><br>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="file" class="col-sm-2 col-form-label">Featured Image</label>
                            <div class="col-sm-10">
                                <input type="file" id="file" class="form-control" name="file">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="category_id" class="col-sm-2 col-form-label">Post Category</label>
                            <div class="col-sm-10">
                                <select id="category_id" name="category_id" class="form-control">
                                    <option>--Select a Category...--</option>
                                    @foreach($categories as $category)
                                        <option value="{{$category->id}}">{{$category->category}}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>

                        <br style="clear:both">
                        <h4>Post Content</h4>
                        @csrf
                        <textarea name="content" id="summernote">{{old('content')}}</textarea>

                        <input type="submit" value="POST">
                    </form>
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