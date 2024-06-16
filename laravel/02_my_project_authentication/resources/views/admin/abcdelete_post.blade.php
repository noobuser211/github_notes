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
                    <h4>Are you sure you want to delete this post?</h4>
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
                                <input disabled value="{{$row->title}}" type="text" class="form-control" placeholder="Title" id="title" name="title" autofocus><br>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="file" class="col-sm-2 col-form-label">Featured Image</label>
                            <div class="col-sm-10">
                                <img src="{{url('uploads/'.$row->image)}}" style="width: 200px;">
                            </div>
                        </div>

                        <br style="clear:both">
                        @csrf

                        <input class="btn btn-danger" type="submit" value="Delete" style="float: right;">
                        <a href="{{url('admin/posts')}}">
                            <input class="btn btn-success" type="button" value="Back">                            
                        </a>
                    </form>
                    <?php else: ?>
                    <br>
                    <h4>Sorry, could not find that post.</h4>
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
