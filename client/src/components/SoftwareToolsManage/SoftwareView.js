import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SoftwareView extends Component {
    render () {
        return (
            <section class="sub_wrap">
                <article class="s_cnt mp_pro_li ct1">
                    <div class="li_top">
                        <h2 class="s_tit1">Software Tools 등록/수정</h2>
                    </div>
                    <div class="bo_w re1_wrap re1_wrap_writer">
                        <form name="frm" id="frm" action="" onsubmit="" method="post" >
                            <input id="is_Swtcode" type="hidden" name="is_Swtcode" />
                            <input id="is_Email" type="hidden" name="is_Email" value="guest" />
                            <input id="is_beforeSwtcode" type="hidden" name="is_beforeSwtcode" value="" />
                            <article class="res_w">
                                <p class="ment" style={{"text-align": "right"}}>
                                    <span class="red">(*)</span>표시는 필수입력사항 입니다.
                                </p>
                                <div class="tb_outline">
                                    <table class="table_ty1">
                                        <tr>
                                            <th>
                                                <label for="is_Swt_toolname">툴 이름<span class="red">(*)</span></label>
                                            </th>
                                            <td>
                                                <input type="text" name="is_Swt_toolname" id="is_Swt_toolname" class="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <label for="is_Swt_demo_site">데모 URL<span class="red">(*)</span></label>
                                            </th>
                                            <td>
                                                <input type="text" name="is_Swt_demo_site" id="is_Swt_demo_site" class="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <label for="is_Giturl">Github URL<span class="red">(*)</span></label>
                                            </th>
                                            <td>
                                                <input type="text" name="is_Giturl" id="is_Giturl" class="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <label for="is_Comments">설명<span class="red">(*)</span></label>
                                            </th>
                                            <td>
                                                <textarea name="is_Comments" id="is_Comments" rows="" cols=""></textarea>
                                            </td>
                                        </tr>
                                        <tr class="div_tb_tr fileb">
                                            <th>
                                                메뉴얼 파일 #1
                                            </th>
                                            <td class="fileBox fileBox_w1">
                                                <label for="uploadBtn1" class="btn_file">파일선택</label>
                                                <input type="text" id="manualfile" class="fileName fileName1" 
                                                readonly="readonly" placeholder="선택된 파일 없음"/>
                                                <input type="file" id="uploadBtn1" class="uploadBtn uploadBtn1"
                                                onChange={e => this.handleFileInput('manual',e)}/>	
                                                <div id="upload_menual">
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                메인 이미지
                                            </th>
                                            <td className="fileBox fileBox1">
                                                <label htmlFor='imageSelect' className="btn_file">파일선택</label>
                                                <input type="text" id="imagefile" className="fileName fileName1"
                                                readOnly="readonly" placeholder="선택된 파일 없음"/>
                                                <input type="file" id="imageSelect" className="uploadBtn uploadBtn1"
                                                onChange={e => this.handleFileInput('file',e)}/>
                                                <div id="upload_img">
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                라벨 이미지
                                            </th>
                                            <td className="fileBox fileBox2">
                                                <label htmlFor='imageSelect2' className="btn_file">파일선택</label>
                                                <input type="text" id="imagefile2" className="fileName fileName1"
                                                readOnly="readonly" placeholder="선택된 파일 없음"/>
                                                <input type="file" id="imageSelect2" className="uploadBtn uploadBtn1"
                                                onChange={e => this.handleFileInput('file2',e)}/>
                                                <div id="upload_img2">
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <label for="is_Swt_function">상세 기능<span class="red">(*)</span></label>
                                            </th>
                                            <td>
                                                <textarea name="is_Swt_function" id="is_Swt_function" rows="" cols=""></textarea>
                                            </td>
                                        </tr>
                                    </table>
                                    <div class="btn_confirm mt20" style={{"margin-bottom": "44px"}}>
                                        <Link to={'/SoftwareList'} className="bt_ty bt_ty1 cancel_ty1">취소</Link>
                                        <a href="javascript:" className="bt_ty bt_ty2 submit_ty1 saveclass" 
                                        onClick={(e) => this.submitClick('save', e)}>저장</a>
                                        <a href="javascript:" className="bt_ty bt_ty2 submit_ty1 modifyclass" 
                                        onClick={(e) => this.submitClick('modify', e)}>수정</a>
                                    </div>
                                </div>
                            </article>
                        </form>	
                    </div> 
                </article>
            </section>
        );
    }
}

export default SoftwareView;