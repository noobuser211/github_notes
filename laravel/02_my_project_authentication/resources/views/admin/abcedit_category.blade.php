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
                            <label for="category" class="col-sm-2 col-form-label">Category Name</label>
                            <div class="col-sm-10">
                            <input value="{{$row->category}}" type="text" class="form-control" placeholder="Category" id="category" name="category" autofocus><br>
                            </div>
                        </div>

                        @csrf
                        <input class="btn btn-primary" type="submit" value="Save">
                        <a href="{{url('admin/categories')}}">
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
