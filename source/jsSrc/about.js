function load_content(data) {
    let data_content = data['about_page']
    document.getElementById('paragraph').innerHTML = data_content['paragraph'];
    document.getElementById('artist_lee').innerHTML = data_content['artist_lee'];
    document.getElementById('artist_bts').innerHTML = data_content['artist_bts'];
    document.getElementById('artist_txt').innerHTML = data_content['artist_txt'];
    document.getElementById('careers_paragraph').innerHTML = data_content['careers_paragraph'];
    document.getElementById('careers_button').innerHTML = data_content['careers_button'];
}
