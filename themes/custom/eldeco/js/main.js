jQuery(document).ready(function () {
  jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 50) {
      jQuery("header").addClass("sticky");
    } else {
      jQuery("header").removeClass("sticky");
    }
  });

  jQuery(".gallery-slider .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    dotData: false,
    items: 4,
    nav: true,
    touchDrag: true,
    autoplay: false,
    autoplayHoverPause: true,
    responsiveClass: true,
  });

  jQuery(".navbar-toggler").click(function () {
    jQuery(this).toggleClass("is-active");
  });

  jQuery("#webform-submission-request-call-back-add-formss").submit(function (
    event
  ) {
    //alert("hello")
    // event.preventDefault();
    // get the form data
    // there are many ways to get this data using jQuery (you can use the class or id also)
    var formData = jQuery(
      "#webform-submission-request-call-back-add-form"
    ).serialize();

    // process the form
    jQuery.ajax({
      type: "POST",
      url: "https://eldecocitybareilly.com/api.php",
      data: formData,
      success: function (data) {
        console.log(data);
        //	jQuery('#webform-submission-request-call-back-add-form').submit();
      },
    });

    // stop the form from submitting the normal way and refreshing the page
    //event.preventDefault();
  });

  jQuery("#webform-submission-request-call-back-node-6-add-formss").submit(
    function (event) {
      //alert("hello")
      // event.preventDefault();
      // get the form data
      // there are many ways to get this data using jQuery (you can use the class or id also)
      var formData = jQuery(
        "#webform-submission-request-call-back-node-6-add-form"
      ).serialize();

      // process the form
      jQuery.ajax({
        type: "POST",
        url: "https://eldecocitybareilly.com/api.php",
        data: formData,
        success: function (data) {
          console.log(data);
          //	jQuery('#webform-submission-request-call-back-add-form').submit();
        },
      });

      // stop the form from submitting the normal way and refreshing the page
      //event.preventDefault();
    }
  );
});
