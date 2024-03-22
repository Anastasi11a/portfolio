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
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',    
        backgroundColor: '#343a40',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '4rem',
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
        display: 'flex',
        backgroundColor: '#343a40',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8rem 5rem',
    },
    card: {
        height: '100%',
        marginBottom: '1rem',
        backgroundColor: '#212529',
        borderWidth: '0.01rem',
        borderColor: '#6c757d',
    },
    cardBody: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardImg: {
        maxWidth: '90%',
        width: '18rem',
        height: '12rem',
        borderRadius: '0.4rem',
    },
    cardTitle: {
        color: '#f8f9fa',
        marginBottom: '1.2rem',
        fontWeight: 'bold',
        fontSize: '1.4rem',
    },
    cardLink: {
        textDecoration: 'none',
    },
    cardText: {
        textAlign: 'start',
        padding: '0.3rem',
        fontSize: '0.9rem',
        color: '#0dcaf0',
    },
    skillsTxt: {
        textAlign: 'start',
        color: '#f8f9fa',
        marginBottom: '1rem',
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
    },
    btnVisit: {
        color: '#343a40',
        paddingBottom: '0.5rem',
    }
};

export const btnEffects = {
    btnHoverEffect: ({ target }) => {
        target.style.color = '#0dcaf0';
    },
    btnLeaveEffect: ({ target }) => {
        target.style.color = '#f8f9fa';
    },
    btnFooterHoverEffect: ({ target }) => {
        target.style.color = '#0dcaf0';
        target.style.transform = 'scale(1.2)';
    },
    btnFooterLeaveEffect: ({ target }) => {
        target.style.color = '#f8f9fa';
        target.style.transform = 'scale(1)';
    },
    btnVisitHoverEffect: ({ target }) => {
        target.style.color = '#f8f9fa';
    },
    btnVisitLeaveEffect: ({ target }) => {
        target.style.color = '#343a40';
    },
};