// import React from "react";
// import {connect} from "react-redux";
//
// import {setLoading, setLoadingFalse, setLoadingTrue} from "./unknownReducer";
// import Toggle from "./Toggle";
// import preLoader from "../../assets/images/loader.svg";
//
//
//
//
// class ContainerComponent extends React.Component<any, any> {////вопрос по типизации
//     // componentDidMount() {
//     //     this.props.loading(false)
//     // }
//
//     render() {
//
//         console.log(this.props.loading)
//         return <>
//
//             <div>
//
//                 {/*{this.props.loading ? <Toggle/> : <h1>ЧТО-ТО пошло не так </h1>}*/}
//
//
//             </div>
//         </>
//     }
// }
//
// let mapStateToProps = (state: any) => {
//    return {
//        loading: state.loading.loading
//    }
// }
//
//
// export default connect(mapStateToProps, {setLoading,setLoadingTrue,setLoadingFalse})(ContainerComponent);
