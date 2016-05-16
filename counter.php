<?php
  $txtFile = fopen("countlog.txt", "r+");
  echo fread($txtFile, filesize("countlog.txt"));
  fclose($txtFile);
?>
