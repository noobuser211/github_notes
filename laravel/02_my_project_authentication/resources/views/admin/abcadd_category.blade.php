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
                            <label for="category" class="col-sm-2 col-form-label">Post Category</label>
                            <div class="col-sm-10">
                            <input value="{{old('category')}}" type="text" class="form-control" placeholder="Category" id="category" name="category" autofocus><br>
                            </div>
                        </div>

                        <br style="clear:both">
                        @csrf

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
