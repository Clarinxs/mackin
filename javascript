
<script>
    function printn(n)
    {
        if(n > 0)
        {
            printn(n - 1);
            document.write(n + " ");
        }
        return;
    }
    var n = parseInt(prompt("enter the value n:"));
    printn(n);
</script>
