$('#add_user').submit(function (event) {
  alert('Product Added!');
});

$('#update_user').submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {};

  $.map(unindexed_array, function (n, i) {
    data[n['name']] = n['value'];
  });

  var request = {
    url: `http://localhost:10000/api/users/${data.id}`,
    method: 'PUT',
    data: data,
  };

  $.ajax(request).done(function (response) {
    alert('Product Updated!');
  });
});

if (window.location.pathname == '/') {
  $ondelete = $('.table tbody td a.delete');
  $ondelete.click(function () {
    var id = $(this).attr('data-id');

    var request = {
      url: `http://localhost:10000/api/users/${id}`,
      method: 'DELETE',
    };

    if (confirm('Do you want to delete this product?')) {
      $.ajax(request).done(function (response) {
        alert('Product Deleted!');
        location.reload();
      });
    }
  });
}
