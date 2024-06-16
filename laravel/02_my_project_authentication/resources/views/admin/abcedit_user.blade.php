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
                            <label for="name" class="col-sm-2 col-form-label">User Name</label>
                            <div class="col-sm-10">
                            <input value="{{$row->name}}" type="text" class="form-control" placeholder="Name" id="name" name="name" autofocus><br>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                            <input value="{{$row->email}}" type="text" class="form-control" placeholder="Email" id="email" name="email" autofocus><br>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-10">
                            <input value="" type="text" class="form-control" placeholder="Password" id="password" name="password" autofocus><br>
                            <small>* leave the password empty if you don't want to change it</small>
                            </div>
                        </div>

                        @csrf
                        <input class="btn btn-primary" type="submit" value="Save">
                        <a href="{{url('admin/users')}}">
                            <input class="btn btn-success" type="button" value="Back" style="float: right;">                            
                        </a>
                    </form>
                    <?php else: ?>
                    <br>
                    <h4>Sorry, could not find that category.</h4>
                    <br>
                    <a href="{{url('admin/users')}}">
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
