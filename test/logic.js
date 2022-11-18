<script>
    
    function maxXORInRange(L, R)
    {
           
     
        let val= L ^ R;
         
       
        let pos= 0;
        while (val > 0)
        {
            msbPos++;
            val>>= 1;
        }
         
        let max = 0;
        let two = 1;
        while (pos-- > 0)
        {
            max += two;
            two <<= 1;
        }
         
        return max
    }
     
    let L = 3;
    let R = 4;
    document.write(maxXORInRange(L, R));
     
</script>