/* eslint-disable react/prop-types */
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
    display: 'block',
    margin: '100px auto'
}

const Spinner = ({ loading }) => {
    // ... previous code remains the same
    return (
        <ClipLoader 
            color='red'
            loading={loading}
            cssOverride={override}
            size={150}
        />
    )
}

export default Spinner
