<?php

if(empty($_POST["submit"]))
{
  echo "Form is not submitted!";
  exit;
}

if(empty($_POST["location"]))
{
  echo "Please submit a location";
  exit;
}

?>
