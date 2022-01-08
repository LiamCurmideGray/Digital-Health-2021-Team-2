

function CommonHeader(Title) {

    return (
    <table style={{ width: '75%' }}>
    <tr>
        <td style={{
            textAlign: 'left',
            width: '33%'
        }}>
            <label className="details">
                [Patient Name]
            </label>
        </td>
        <td style={{
            textAlign: 'center',
            width: '33%'
        }}>
            <label className="details">
                [Date]
            </label>
        </td>
        <td style={{
            textAlign: 'right',
            width: '33%'
        }}>
            <label className="details">
                [MR Name]
            </label>
        </td>

    </tr>
</table>
);
}

export default CommonHeader;