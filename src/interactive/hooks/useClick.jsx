const useClick = ({ target, onClick, onDoubleClick, maxTime=200, ...props})=>{
    const timer = useRef(null);

    const activeAction = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if(timer.current == null){
            timer.current = setTimeout(()=>{
                onClick();
                timer.current = null;
            }, maxTime);
        }
        else{
            clearTimeout(timer.current);
            onDoubleClick();
            timer.current = null;
        }
    }

    return ()=>{}
}