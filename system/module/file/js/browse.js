$(document).ready(function()
{
    $('.file-list').sortable(
    {
        trigger: '.icon-move',
        selector: '.file-list .file',
        finish: function()
        {
            var orders = {};     
            var orderNext = 1;
            $('.file-list .file').each(function()
            {
                orders[$(this).data('id')] = orderNext ++;
            });

             $.post(createLink('file', 'sort'), orders, function(data)
             {
                 if(data.result == 'success')
                 {
                     $('#ajaxModal').load($('#ajaxModal').attr('ref'));
                 }
                 else
                 {
                     alert(data.message);
                     return location.reload(); 
                 }
             }, 'json');
        }
    })
})
