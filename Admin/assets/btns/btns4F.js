


function showContent12(contentId) {
      var allContents = document.querySelectorAll('.content');
        /* console.log(typeof allContents);
        console.log(allContents); */
      allContents.forEach(function(content) {
          content.classList.remove('active');
      });

    // Show the selected content
      var selectedContent = document.getElementById(contentId);
      selectedContent.classList.add('active');
  }

                         