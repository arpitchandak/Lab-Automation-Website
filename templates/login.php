<!DOCTYPE html>
<html>
  <head>
    <title>lab</title>
  </head>
  <body>
      
    <?php
    $uname = $upass = "";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $uname = test_input($_POST["username"]);
      $upass = test_input($_POST["password"]);
   }
   if ($uname == "arpit" and $upass == "123"){
    //You need to redirect
    header("Location: index.html"); /* Redirect browser */
    //exit();
   }
  else{
    // do some
  }
  ?>
    <form action ="login.php" method ="POST">
      USERNAME<br>
      <input type ="text" name ="username" value="<?php echo $username;?>"><br>
      PASSWORD<br>
      <input type ="password" name ="password" value="<?php echo $password;?>"><br>
      <input type = "submit" name = "sub" value="submit">
    </form>
  </body>
</html>
