export default function Book(props) {

    var containerStyle = { width: '380px', background: 'white', border: '1px solid #e0e0e0', borderRadius: '6px', padding: '24px 20px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', fontSize: '14px', color: '#333' }
    var titleStyle = { fontSize: '20px', fontWeight: '600', lineHeight: '1.35', marginBottom: '8px' }
    var authorTextStyle = { color: '#0066cc', marginBottom: '12px', lineHeight: '1.4' }
    var authorNameStyle = { fontWeight: '500' }
    var ratingRowStyle = { margin: '14px 0', display: 'flex', alignItems: 'center', gap: '8px' }
    var starsStyle = { color: '#f1c40f', fontSize: '20px', letterSpacing: '1px' }
    var ratingTextStyle = { fontSize: '15px', fontWeight: '500' }
    var buttonRowStyle = { display: 'flex', gap: '10px', margin: '20px 0 8px' }
    var dropdownWrapperStyle = { position: 'relative', flex: '1' }
    var primaryButtonStyle = { width: '100%', padding: '10px 16px', background: '#0066cc', color: 'white', border: 'none', borderRadius: '4px', fontWeight: '600', fontSize: '14px', cursor: 'pointer' }
    var {name,author,rating} = props;
    return (
        <div style={containerStyle}>

            {/* Title */}
            <div style={titleStyle}>
                {name}
            </div>

            {/* Authors */}
            <div style={authorTextStyle}>
                by <span style={authorNameStyle}>{author}</span>
            </div>

            {/* Rating */}
            <div style={ratingRowStyle}>
                <div style={starsStyle}>★★★★★</div>
                <div style={ratingTextStyle}>{rating} avg rating</div>
            </div>

            {/* Buttons */}
            <div style={buttonRowStyle}>
                <div style={dropdownWrapperStyle}>
                    <button style={primaryButtonStyle}>
                        Want to Read ▾
                    </button>
                </div>
            </div>

        </div>
    );
}