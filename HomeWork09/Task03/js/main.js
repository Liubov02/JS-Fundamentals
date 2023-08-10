/* Task03
Знайдіть теги <div>, які стоять безпосередньо після <h3> і перемістіть кожен <div>-елемент так, щоб він став безпосередньо над <h3>.
   <h3>header1</h3>
   <div>text1</div>
   <h3>header2</h3>
   <div>text2</div>
   */

   $(function() {

    $("h3 + div").each(function() {
        $(this).insertBefore($(this).prev("h3"));
      });

   });