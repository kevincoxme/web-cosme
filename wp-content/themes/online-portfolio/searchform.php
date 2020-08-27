<?php
?>
<form action="<?php echo esc_url(home_url()) ?>" autocomplete="on" class="top-search">
    <input id="search" name="s" value="<?php echo esc_attr(get_search_query()); ?>" type="text" placeholder="<?php  esc_html_e('Search','online-portfolio')?>&hellip;&hellip;">
    <div class="search-button"><button type="submit"><?php  esc_html_e('Search','online-portfolio')?></button></div>
</form>
