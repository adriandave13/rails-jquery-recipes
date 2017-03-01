# ActionView::Base.field_error_proc = Proc.new do |html_tag, instance|
#   if html_tag =~ /\<label/
#     html_tag
#   else
#     errors = Array(instance.error_message).join(',')
#     %(<div class="validation-error">#{html_tag}#{errors}</div>).html_safe
#   end
# end
