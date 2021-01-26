import Link from 'next/link';

function Menu(){

    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Next JS</a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <Link href="/">
                    <a class="nav-link">Counter <span class="sr-only"></span></a>
                    </Link>
                    
                </li>
                <li class="nav-item">
                    <Link href="/calculator">
                    <a class="nav-link" href="#">Calculator</a>
                    </Link>
                </li>      
            
                </ul>   
            </div>
            </nav>
        </div>
    )
}

export default Menu;