import React from 'react';

export default class ListCategory extends React.Component {
    render() {
        return (
            <>
                {/*main content start*/}
                <section id="main-content" style={{padding : 10}}>
                    <section className="wrapper">
                        <h3><i className="fa fa-angle-right"/> Category <button type="button" className="btn btn-primary pull-right">Add</button></h3>

                        <div className="row mb">
                            {/* page start*/}
                            <div className="content-panel">
                                <div className="adv-table">
                                    <table className="table table-striped">
                                        <thead>
                                        <tr>
                                            <th width="100" scope="col">#</th>
                                            <th width="300" scope="col">Name</th>
                                            <th width="100" scope="col">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>
                                                <button type="button" className="btn btn-success">Edit</button>&nbsp;
                                                <button type="button" className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>
                                                <button type="button" className="btn btn-success">Edit</button>&nbsp;
                                                <button type="button" className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>
                                                <button type="button" className="btn btn-success">Edit</button>&nbsp;
                                                <button type="button" className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* page end*/}
                        </div>
                        {/* /row */}
                    </section>
                    {/* /wrapper */}
                </section>
                {/* /MAIN CONTENT */}
                {/*main content end*/}
            </>
        )
    }
}