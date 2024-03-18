export const itemStyles = {
    // Header styles
    navbarStyle: {
        backgroundColor: '#212529',
        borderBottom: '1px solid #6c757d',
        padding: '0.6rem 1rem',
    },
    brandStyle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#0dcaf0',
    },
    collapseSlyle: {
        justifyContent: 'right',
        marginRight: '1rem',
        fontSize: '1.25rem',
    },
    // Footer styles
    containerFooter: {
        padding: '1rem',
        bottom: '0',
        width: '100%',
        backgroundColor: '#212529',
        borderTop: '1px solid #6c757d',
    },
    textFooter: {
        color: '#f8f9fa',
        fontSize: '0.85rem',
        margin: '0.5rem',
        paddingBottom: '0.8rem',
        textAlign: 'center',
    },
    rowFooter: {
        justifyContent: 'center',
    },
    // Home styles
    containerHome: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",    
        backgroundColor: "#343a40",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "4rem",
    },
    colHome: {
        textAlign: 'center',
        marginBottom: '1rem'
    },
    header: {
        marginBottom: '1.25rem',
        fontSize: '1.8rem',
        color: '#f8f9fa',
    },
    bio1: {
        marginBottom: '0.75rem',
        fontSize: '2rem',
        fontWeight: '700',
        color: '#0dcaf0',
    },
    bio2: {
        marginBottom: '1rem',
        fontSize: '1.6rem',
        fontWeight: '700',
        color: '#f8f9fa',
    },
    btn: {
        marginTop: '1.2rem',
    },
    // Projects styles
    containerProjects: {
        display: "flex",
        background: "linear-gradient(to bottom, #343a40, #212529)",
        justifyContent: "center",
        alignItems: "center",
        padding: "8rem 5rem",
    },
    card: {
        height: '100%',
        marginBottom: '1rem',
        backgroundColor: '#212529',
        borderWidth: '1px',
        borderColor: '#6c757d',
    },
    cardImg: { 
        width: "90%",
        height: "16rem",
        margin: "auto", 
        borderRadius: "0.4rem",
        objectFit: "cover",
    },
    cardTitle: {
        textAlign: "center",
        color: "#f8f9fa",
        padding: "1.5rem",
        fontWeight: "bold",
        fontSize: "1.25rem",
    },
    cardBody: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    cardText: {
        marginRight: '0.5rem',
        marginBottom: '0',
        padding: '0.5rem',
        fontSize: '1rem',
        color: '#0dcaf0',
    },
    // Buttons and Links styles
    btnStyle: {
        backgroundColor: 'transparent',
        color: '#f8f9fa',
        transition: 'color 0.3s',
    },
    btnStyleHeader: {
        color: '#f8f9fa',
        textAlign: 'center',
        marginTop: '0.8rem',
        transition: 'color 0.3s',
    }
};

export const btnEffects = {
    btnHoverEffect: (e) => {
        e.target.style.color = '#0dcaf0';
    },
    btnLeaveEffect: (e) => {
        e.target.style.color = 'white';
    },
    btnFooterHoverEffect: (e) => {
        e.target.style.color = '#0dcaf0';
        e.target.style.transform = 'scale(1.2)';
    },
    btnFooterLeaveEffect: (e) => {
        e.target.style.color = 'white';
        e.target.style.transform = 'scale(1)';
    },
};