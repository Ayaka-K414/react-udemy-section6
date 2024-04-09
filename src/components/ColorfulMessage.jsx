export const ColorfulMessage = ({color,children}) => {
    console.log('--ColorfulMessage--');
    // const {color,children} = props; →引数で直接分割代入できる
    const contentStyleA = {
        color, //プロパティと値が同じ名称のときは省略できる
        fontSize: '18px',
    };
    return(
        <p style={contentStyleA}>{children}</p>
    );
};