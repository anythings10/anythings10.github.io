import checkList from "../assets/cheklis.svg";
import {
  NewspaperIcon,
  PencilIcon,
  InformationCircleIcon,
  MapIcon,
  UsersIcon,
  CubeTransparentIcon,
  ArrowPathRoundedSquareIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/16/solid";
import bgKades from "../assets/kades-bg.png";
import logoBg from "../assets/image-10.png";
import demoBg from "../assets/image-9.png";

//gambar untuk gallery desa
import image1 from "../assets/image-16.jpg";
import image2 from "../assets/image-8.jpeg";
import image3 from "../assets/image-7.jpeg";
import image4 from "../assets/image-6.jpg";
import image5 from "../assets/image-5.jpg";
import image6 from "../assets/image-4.jpg";
import image7 from "../assets/image-3.jpeg";

//gambar untuk perangkat desa
import kades from "../assets/kades.png";
import sekretaris from "../assets/seki.png";
import perencanaan from "../assets/perencanaan.png";
import keuangan from "../assets/keuangan.png";

//gambar untuk logo lembaga
import bumdes from "../assets/image-10.png";
import kartar from "../assets/pngwing.com.png";
import bpd from "../assets/logo_bpd.png";
import pkk from "../assets/LOGO-PKK-PNG.png";

//gambar untuk berita desa
import berita2 from "../assets/image-1.png";
import berita3 from "../assets/berita.png";
import berita4 from "../assets/image-31.jpg";
const sambutan = `Selamat datang di website profil Desa Alata Karya,
Alhamdulillah, pada hari ini kita resmi meluncurkan website profil Desa Alata Karya. Kehadiran website ini merupakan wujud nyata dari komitmen Pemerintah Desa Alata Karya untuk memberikan pelayanan publik yang lebih mudah, cepat,dan transparan.
Dengan adanya website ini, masyarakat dapat mengakses berbagai informasi terkait dengan pelayanan desa, pengurusan administrasi, serta program-program pembangunan yang sedang berjalan. Kami berharap, website ini dapat mempermudah masyarakat dalam mendapatkan informasi yang dibutuhkan dan mempercepat proses pelayanan.`;

export const NavItems = [
  {
    name: "Beranda",
    path: "/",
  },
  {
    name: "Profil Desa",
    path: "/profile-desa",
  },
  {
    name: "Infografis",
    path: "/infografis",
  },
  {
    name: "Berita",
    path: "/berita",
  },
  {
    name: "PPID",
    path: "/ppid",
  },
  {
    name: "Peta Desa",
    path: "/peta-desa",
  },
];
export const visitData = [
  {
    icon: PencilIcon,
    name: "Cek DPT Online",
    path: "https://cekdptonline.kpu.go.id/",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisi nisi",
    bgColor: "bg-merah",
  },
  {
    icon: MapIcon,
    name: "Profil Desa",
    path: "/profile-desa",
    desc: "lorem ipsum dolor sit amet,  , nisi vel consectetur interdum, nisi nisi",
    bgColor: "bg-kuning",
  },
  {
    icon: InformationCircleIcon,
    name: "Infografis",
    path: "/infografis",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing , ",
    bgColor: "bg-pink",
  },
  {
    icon: NewspaperIcon,
    name: "Berita",
    path: "/berita",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisi nisi",
    bgColor: "bg-ungu",
  },
];
export const highLight = [
  {
    title: "Layanan Surat Digital",
    image: checkList,
  },
  {
    title: "Informasi Desa",
    image: checkList,
  },
];
export const highLight2 = [
  {
    title: "Transparansi",
    icon: CubeTransparentIcon,
    bgColor: "bg-kuning",
  },
  {
    title: "Akuntabel",
    icon: ClipboardDocumentCheckIcon,
    bgColor: "bg-merah",
  },
  {
    title: "Partisipatif",
    icon: ArrowPathRoundedSquareIcon,
    bgColor: "bg-ungu",
  },
  {
    title: "Tertib & Disiplin",
    icon: UsersIcon,
    bgColor: "bg-pink",
  },
];
export const totalPenduduk = [
  {
    title: "Total Penduduk",
    value: "1.239",
  },
  {
    title: "Laki-laki",
    value: "652",
  },
  {
    title: "Perempuan",
    value: "614",
  },
  {
    title: "Kepala Keluarga",
    value: "257",
  },
];
export const apbDes = [
  {
    title: "Pendapatan Desa",
    total: "Rp.-",
  },
  {
    title: "Dana Desa",
    total: "Rp.674.741.000",
  },
];

export const idmList = [
  {
    title: "Status Desa",
    total: " Alata Karya",
  },
  {
    title: "Skor IDM 2025",
    total: "0.78",
  },
  {
    title: "Dimensi Sosial",
    total: "0.82",
  },
];
export const userData = [
  {
    id: 1,
    image: kades,
    name: "SOFYAN BASIR MAHMUD",
    desc: "KEPALA DESA",
  },
  {
    id: 2,
    image: sekretaris,
    name: "KARTIN NAKODA",
    desc: "SEKERTARIS DESA",
  },
  {
    id: 3,
    image: perencanaan,
    name: "RATNA MINGGU",
    desc: "KAUR UMUM & PERENCANAAN",
  },
  {
    id: 4,
    image: keuangan,
    name: "YAYU AFRIANI MOHA",
    desc: "KAUR KEUANGAN",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/150",
    nama: "Chris Wilson",
    profesi: "UX Designer",
  },
  {
    id: 6,
    image: "https://via.placeholder.com/150",
    nama: "Jessica Johnson",
    profesi: "Marketing Specialist",
  },
  {
    id: 7,
    image: "https://via.placeholder.com/150",
    nama: "Daniel Martinez",
    profesi: "Mobile Developer",
  },
  {
    id: 8,
    image: "https://via.placeholder.com/150",
    nama: "Sophia Garcia",
    profesi: "Web Developer",
  },
  {
    id: 9,
    image: "https://via.placeholder.com/150",
    nama: "James Rodriguez",
    profesi: "Cloud Engineer",
  },
  {
    id: 10,
    image: "https://via.placeholder.com/150",
    nama: "Olivia Lopez",
    profesi: "Content Writer",
  },
  {
    id: 11,
    image: "https://via.placeholder.com/150",
    nama: "Ethan Hall",
    profesi: "DevOps Engineer",
  },
  {
    id: 12,
    image: "https://via.placeholder.com/150",
    nama: "Isabella White",
    profesi: "Project Coordinator",
  },
  {
    id: 13,
    image: "https://via.placeholder.com/150",
    nama: "Alexander Harris",
    profesi: "Business Analyst",
  },
  {
    id: 14,
    image: "https://via.placeholder.com/150",
    nama: "Mia Thomas",
    profesi: "SEO Specialist",
  },
  {
    id: 15,
    image: "https://via.placeholder.com/150",
    nama: "William Jackson",
    profesi: "Cybersecurity Analyst",
  },
  {
    id: 16,
    image: "https://via.placeholder.com/150",
    nama: "Ava Lewis",
    profesi: "AI Engineer",
  },
];
export const galleryDesa = [
  {
    title: "Desa Alata Karya",
    description:
      "Salah satu desa di Kabupaten Gorontalo Utara yang berada di Kecamatan Kwandang",
    image: image1,
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Kegiatan Pelatihan ",
    image: image2,
  },
  {
    title: "Kegiatan Pelatihan ",
    image: image3,
  },
  {
    title: "Kegiatan Pelatihan ",
    image: image4,
  },
  {
    title: "Kegiatan Pelatihan ",
    image: image5,
  },
  {
    title: "Rapat Kepala Desa",
    image: image6,
  },
  {
    title: "Rapat Kepala Desa",
    image: image7,
  },
];

// paragragf berita
const desc1 = `Gorontalo Utara, 22 Agustus 2024 – Desa Alata Karya, yang terletak di Kabupaten Gorontalo Utara, mengambil langkah maju dalam upaya memperkuat pelayanan publik dan pemberdayaan masyarakat melalui pelatihan transformasi digital yang diadakan pada tanggal 14-16 Agustus 2024. Pelatihan ini diinisiasi oleh Pemerintah desa Alata Karya .

Meningkatkan Kualitas Pelayanan dan Keterlibatan Masyarakat

Pelatihan ini bertujuan untuk meningkatkan kemampuan aparatur desa dan masyarakat setempat dalam memanfaatkan teknologi digital untuk mempercepat proses administrasi dan meningkatkan transparansi serta efisiensi pelayanan publik. Selama dua hari, peserta yang terdiri dari aparat desa, pengelolaan data desa, serta cara memanfaatkan media sosial dan platform online untuk komunikasi yang lebih efektif dengan masyarakat.


Kepala Desa Alata Karya, dalam sambutannya menekankan pentingnya transformasi digital sebagai kunci dalam meningkatkan kualitas pelayanan desa. “Dengan adanya pelatihan ini, kita berharap Desa Alata Karya dapat menjadi contoh bagi desa-desa lain di Gorontalo Utara dalam penerapan teknologi untuk pelayanan publik yang lebih baik. Ini adalah langkah awal menuju desa mandiri yang dapat mendukung pembangunan berkelanjutan dan kesejahteraan masyarakat,” ujarnya.

Pelatihan ini mencakup berbagai materi, termasuk pengenalan sistem informasi desa, manajemen data berbasis digital, serta cara mengintegrasikan teknologi dengan kegiatan pelayanan sehari-hari. Selain itu, peserta juga diberikan sesi praktek langsung untuk mengoperasikan aplikasi dan perangkat digital yang akan digunakan dalam kegiatan administrasi dan pelayanan di desa.

Setelah pelatihan ini, Pemerintah Desa Alata Karya berencana untuk mulai mengimplementasikan teknologi yang telah diperkenalkan selama pelatihan dalam sistem administrasi dan pelayanan desa. Selain itu, akan dilakukan evaluasi berkala untuk memastikan bahwa transformasi digital berjalan sesuai rencana dan memberikan manfaat nyata bagi masyarakat.

Dengan berakhirnya pelatihan ini, Desa Alata Karya siap memulai babak baru dalam pengelolaan pelayanan publik yang lebih modern dan efektif, mendukung visi besar Kabupaten Gorontalo Utara untuk mewujudkan desa-desa yang lebih maju dan mandiri di masa depan.

Editor : jurnalis Alata (AH)`;
const desc2 = `Radarsuara.com, Gorontalo Utara – Kementerian Pertanian (Kementan) terus mendorong program Perluasan Areal Tanam (PAT) Padi diantaranya dengan program pompanisasi untuk mendukung kenaikan produktivitas padi.

Menteri Pertanian (Mentan) Andi Amran Sulaiman, menyampaikan dalam berbagai kesempatan, jika ancaman krisis pangan harus diantisipasi dengan cepat.

“Jika tidak ada langkah cepat dan strategis, maka akan berakibat fatal pada seluruh sektor, untuk itu seluruh insan pertanian harus bergerak cepat, agar krisis pangan tersebut dapat dicegah secepat mungkin” ucapnya. 

Pelaksana Tugas (Plt). Kepala Badan Penyuluhan dan Pengembangan Sumber Daya Manusia Pertanian (BPPSDMP) Kementan, Dedi Nursyamsi menyampaikan dalam berbagai kesempatan bahwa “Sektor pertanian perlu ditangani dengan serius dan diperlukan kolaborasi yang harmoni dalam menyelesaikan permasalahan yang ada”.

Dedi mengajak para pihak untuk berkolaborasi meningkatkan produksi, Perluasan Areal Tanam (PAT) dan meningkatkan Indeks Pertanaman (IP). 

Kamis (1/08/2024) Badan Penyuluhan dan Pengembangan Sumber Daya Manusia Pertanian (BPPSDMP) Kementan melalui Pusat Pendidkan Pertanian (Pusdiktan) bersama Pemda Gorontalo Utara melakukan uji coba pompanisasi di desa  Pontolo dan Alata Karya, Kecamatan Kwandang, Kabupaten Gorontalo Utara, diharapkan mampu memberi solusi untuk pengairan sawah dan meningkatkan produktivitas padi. 

Idha Widi Arsanti, Kepala Pusat Pendidikan dalam berbagai kesempatan menyampaikan kepada para pihak agar selalu fokus bersinergi untuk program peningkatan produktifitas pangan. “Kita selalu berupaya agar tiap waktu ada penambahan Perluasan Areal Tanam, ungkap Ida.

Sapto Rini, Ketua Kelompok Program dan Kerjasama Pusdiktan yang merupakan penanggung jawab wilayah Gorontalo Utara menyampaikan bahwa diperlukan keseriusan dalam pendampingan program PAT “Pompanisasi ini diperlukan pengecekan alat pompa berfungsi dengan baik untuk mendukung Perluasan Areal Tanam padi dan hal ini sangat penting dalam meningkatkan produksi pertanian”.

Kelompok tani penerima bantuan pompa dan pendampingan uji pemanfaatan kali ini adalah Poktan Bunga Padi Desa Alata Karya dan Poktan Mandiri Desa Pontolo, Kecamatan Kwandang, Kabupaten Gorontalo Utara. (mry)`;
const desc3 = `Dalam kegiatan diawali ucapan terimakasi kepada pihak Kepolisian dengan adanya kegiatan Jumat Curhat ini besar harapan kami dapat mendengarkan keluhan masyarakat secara langsung dan bisa segera ditanggapi. Ucap Kepala Desa 

Apresiasi kepada Bapak Waka polres yang telah menyelenggarakan program Jumat Curhat ini karena kami masyarakat desa Alata Karya dapat bertatap muka langsung dengan pimpinan Polres Gorontalo Utara dalam hal ini Wakapolres langsung mendengarkan keluhan masyarakat khususnya Desa Alata Karya. Ucapnya 

Dalam Kesempatan Jum’at Curhat Waka Polres Ucapan terimakasih untuk waktu yang telah di berikan kepada kami melaksanakan jumat curhat di tempat ini.

Besar harapan kami dalam program Jumat curhat yang insya Allah bisa menjadi wadah warga masyarakat untuk menyampaikan berbagai keluhan sehingga hal ini bisa memperbaiki kinerja dan kemajuan institusi Polri khusunya Polres Gorontalo Utara.

Dari kegiatan tersebut beberapa hal yang menjadi masukan serta pertanyaan dari masyarakat.

Banyaknya pengendara roda 2 terutama anak muda, masih banyak yang sering ugal-ugalan di jalanan.

Masih banyaknya kenderaan yang mengunakan knalpot racing. 

Adanya keluhan kelangkaan pupuk yang di gunakan oleh petani.

Mengenai BBM untuk para Nelayan yang ada di desa Alata karya yang susah mendapatkan BBM khusunya BBM alat pertanian. Ucap Masyarakat 

Tanggapan Wakapolres Gorontalo Utara Saya menyarankan kepada masyarakat agar bisa membuat polisi tidur yang bukan permanen agar bisa mengurangi atau membatasi kecepatan kenderaan yang lewat dan Insyaallah meminimalisir adanya laka lantas.

Mengenai permasalahan knalpot racing kami pihak kepolisian sudah melakukan penindakan, untuk polres juga kami menargetkan setiap minggunya ada sekitar 50 knalpot racing yang akan kami tindaki secara Tegas.Ucap Waka 

Mengenai kelangkaan pupuk saya akan memerintahkan kepada kasat intelkam agar bisa memerintahkan anggotanya untuk melakukan penyelidikan terkait kelangkaan pupuk.

Terkait susahnya para nelayan mendapatkan BBM agar bisa dikoordinasikan dengan dinas perikanan agar bisa dibuatkan surat rekomendasi ke SPBU.`;
const desc4 = `Gorontalo Utara, 22 Agustus 2024 – Desa Alata Karya di Kabupaten Gorontalo Utara terus menunjukkan komitmennya dalam meningkatkan perekonomian lokal melalui pengembangan Usaha Mikro, Kecil, dan Menengah (UMKM). Berbagai inisiatif dan program telah diluncurkan untuk memperkuat UMKM di desa ini, dengan tujuan meningkatkan kesejahteraan masyarakat dan menciptakan lapangan kerja baru.

Sebagai bagian dari upaya tersebut, Pemerintah Desa Alata Karya bekerja sama dengan Dinas Koperasi dan UMKM Kabupaten Gorontalo Utara, serta beberapa lembaga non-pemerintah, mengadakan serangkaian pelatihan dan pendampingan bagi pelaku UMKM lokal. Pelatihan ini mencakup berbagai aspek penting seperti manajemen usaha, pengelolaan keuangan, pemasaran digital, serta peningkatan kualitas produk.

Kepala Desa Alata Karya, H. Ahmad Laode, menyatakan bahwa pengembangan UMKM merupakan salah satu prioritas utama desa untuk meningkatkan taraf hidup masyarakat. “UMKM adalah tulang punggung perekonomian desa. Dengan memberikan pelatihan dan pendampingan yang tepat, kami berharap para pelaku usaha kecil di desa ini dapat lebih mandiri, kreatif, dan kompetitif,” ujarnya.

Dalam program ini, desa juga menggandeng sektor swasta dan akademisi untuk membantu UMKM dalam mengakses pasar yang lebih luas. Beberapa perusahaan lokal memberikan bantuan berupa modal usaha dan fasilitas promosi, sementara perguruan tinggi menyediakan tenaga ahli untuk mendampingi pelaku usaha dalam mengembangkan produk yang inovatif dan memiliki daya saing.

Dr. Iwan Budiarto, salah satu dosen dari Universitas Negeri Gorontalo yang terlibat dalam program ini, menjelaskan bahwa sinergi antara pemerintah, akademisi, dan pelaku usaha sangat penting untuk mendorong pertumbuhan UMKM. “Dengan kolaborasi ini, kami tidak hanya memberikan teori, tetapi juga praktik langsung di lapangan, sehingga para pelaku UMKM dapat merasakan manfaat nyata dari program ini,” jelasnya.

Salah satu fokus utama pengembangan UMKM di Desa Alata Karya adalah memperkuat pemasaran digital. Melalui pelatihan yang diberikan, para pelaku UMKM didorong untuk memanfaatkan platform e-commerce dan media sosial untuk memasarkan produk mereka. Pemerintah desa juga menyediakan fasilitas internet gratis di beberapa titik desa untuk mendukung kegiatan ini.

Siti Aisyah, salah satu pelaku UMKM di Desa Alata Karya, mengaku sangat terbantu dengan adanya pelatihan ini. “Saya sekarang bisa memasarkan produk kerajinan tangan saya melalui media sosial dan mendapatkan lebih banyak pelanggan. Ini sangat membantu meningkatkan pendapatan keluarga kami,” katanya.

Dengan berjalannya program pengembangan UMKM ini, Desa Alata Karya diharapkan dapat menjadi contoh bagi desa-desa lain di Kabupaten Gorontalo Utara dalam hal pengelolaan dan pengembangan ekonomi lokal. Pemerintah desa berkomitmen untuk terus memberikan dukungan dan pendampingan kepada pelaku UMKM agar mereka dapat berkembang dan berkontribusi lebih besar terhadap perekonomian desa.

Selain itu, desa juga berencana untuk memperluas akses pasar bagi produk-produk UMKM melalui partisipasi dalam berbagai pameran dan bazar baik di tingkat regional maupun nasional. Upaya ini diharapkan dapat membuka peluang baru bagi UMKM Desa Alata Karya untuk menembus pasar yang lebih luas.

Editor : Jurnalis Alata Alata (AH)`;
export const beritaDummy = [
  {
    id: 1,
    name: "Desa Alata Karya Siap Jadi Desa Cerdas Melalui Pelatihan Transformasi Digital",
    desc: desc1,
    image: image2,
    category: "Lingkungan",
    date: "19 Agustus 2024",
    path: "/berita",
  },
  {
    id: 2,
    name: "Tingkatkan Produktivitas Padi, Kementan Pastikan  Pompa di Gorontalo Utara",
    desc: desc2,
    image: berita2,
    category: "Teknologi",
    date: "3 September 2024",
    path: "/berita",
  },
  {
    id: 3,
    name: "Polres Gorontalo Utara laksanakan Jum’at Curhat di desa Alata Karya ",
    desc: desc3,
    image: berita3,
    category: "Olahraga",
    date: "3 September 2024",
    path: "/berita",
  },
  {
    id: 4,
    name: "Pengembangan UMKM di Desa Alata Karya: Upaya Meningkatkan Ekonomi Lokal",
    desc: desc4,
    image: berita4,
    category: "Ekonomi",
    date: "23 Agustus 2024",
    path: "/berita",
  },
];

export const heroDummy = [
  {
    name: "Sofyan Basir Mahmud",
    title: "Sambutan Kepala Desa",
    desc: sambutan,
    image: bgKades,
  },
];
export const heroDummy2 = [
  {
    name: "VISI & MISI",
    title: "VISI",
    desc: "Meneguhkan Desa Alata Karya Sebagai Desa Nyaman Huni dan Pusat Pelayanan yang Berdaya Saing Kuat untuk Keberdayaan Masyarakat dengan Berpijak pada Nilai Keistimewaan",
    misi: "MISI",
    paragraphMisi:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod, lacus eget aliquamtincidunt, lorem nisl aliquet nunc, sit amet ornare nunc nisi euismod lacus. Vestibulum euismod, lacus eget aliquam tincidunt,lorem nisl aliquet nunc, sit amet ornare nunc nisi euismod lacu",
    image: logoBg,
    namaDesa: "DESA ALATA KARYA",
    alamatDesa: "Kec. Kwandang, Kab. Gorontalo Utara",
  },
];
export const heroDummy3 = [
  {
    image:
      "https://images.unsplash.com/photo-1597047085528-914c8aa0623d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Sejarah Desa Alata Karya",
    desc: "Desa Alata Karya merupakan Desa yang di Mekarkan dari Desa Leboto  pada Tahun 2011 yang pada saat itu Kepala Desa-nya adalah “SUDARMAN B.MAHMUD,SE” dengan adanya semangat, perjuangan dan kerja keras dari Tokoh masyarakat dan Panitia Pemekaran Desa Leboto   maka lahirlah Desa Mekaran pada tanggal 17 Januari 2011 yang diberi nama “ DESA ALATA KARYA” yang kemudian Desa Alata Karya  sebagai  Penjabat  Kepala  Desa   Adalah        “ SOFYAN B.MAHMUD” selama ± 1 Tahun, kemudian pada tahun 2012 digantikan oleh Bapak SION NUR selama ± 2 Bulan kemudian  Bapak SOFYAN B.MAHMUD menjadi  Kepala Desa yang Definitif, dan kemudian sebagai pejabat Kepala Desa adalah Bapak “DANIAL PAKAYA” selama 1 Tahun, yang kemudian Desa Alata Karya melakukan Pemilihan Kepala Desa Tahun 2019 dan yang menjadi Kepala Desa Aldalah Bapak “SOFYAN BASIR MAHMUD” yang menjabat dari tahun 2019-2025.",
    namaDesa: "DESA ALATA KARYA",
    alamatDesa: "Kec. Kwandang, Kab. Gorontalo Utara",
  },
];
export const heroDummy4 = [
  {
    image: demoBg,
    title: "DEMOGRAFI PENDUDUK",
    desc: "Memberikan informasi lengkap mengenai karakteristik demografi penduduk suatu wilayah. Mulai dari jumlah penduduk, usia, jenis kelamin, tingkat pendidikan, pekerjaan, agama, dan aspek penting lainnya yang menggambarkan komposisi populasi secara rinci.",
  },
];
export const householdData = [
  { name: "KK Prasejahtera", value: 30, color: "#FF6384" },
  { name: "KK Sejahtera", value: 25, color: "#36A2EB" },
  { name: "KK Kaya", value: 15, color: "#FFCE56" },
  { name: "KK Sedang", value: 20, color: "#4BC0C0" },
  { name: "KK Miskin", value: 10, color: "#9966FF" },
];
// data untuk chart
export const dusunDummy = [
  { dusun: "Dusun 1", jumlah: 87, color: "#6EC1E4" },
  { dusun: "Dusun 2", jumlah: 88, color: "#4CAF50" },
  { dusun: "Dusun 3", jumlah: 116, color: "#3F51B5" },
  { dusun: "Dusun 4", jumlah: 27, color: "#8BC34A" },
  { dusun: "Dusun 5", jumlah: 16, color: "#FFC107" },
  { dusun: "Dusun 6", jumlah: 3, color: "#F44336" },
];
export const dataDummy = [
  { kategori: "KK Prasejahterah", nilai: 20 },
  { kategori: "KK Sejahterah", nilai: 30 },
  { kategori: "KK Kaya", nilai: 15 },
  { kategori: "KK Sedang", nilai: 25 },
  { kategori: "KK Miskin", nilai: 10 },
];
export const populationData = {
  labels: ["0-15", "16-55"],
  datasets: [
    {
      label: "Jumlah Laki-laki",
      data: [465, 980],
      backgroundColor: "rgba(54, 162, 235, 0.6)", // Warna biru
      borderWidth: 1,
    },
    {
      label: "Jumlah Perempuan",
      data: [140, 350],
      backgroundColor: "rgba(255, 99, 132, 0.6)", // Warna merah
      borderWidth: 1,
    },
  ],
};

export const dummyPekerjaan = [
  { pekerjaan: "Petani", jumlah: 125 },
  { pekerjaan: "Pedagang", jumlah: 13 },
  { pekerjaan: "Tukang Bentor", jumlah: 10 },
  { pekerjaan: "Karyawan", jumlah: 5 },
  { pekerjaan: "PNS", jumlah: 51 },
  { pekerjaan: "Pensiunan", jumlah: 2 },
  { pekerjaan: "TNI/Polri", jumlah: 2 },
  { pekerjaan: "Perangkat Desa", jumlah: 10 },
  { pekerjaan: "Jasa", jumlah: 4 },
  { pekerjaan: "Buruh Harian", jumlah: 23 },
  { pekerjaan: "Pengrajin", jumlah: 1 },
  { pekerjaan: "Wiraswasta", jumlah: 43 },
  { pekerjaan: "Nelayan", jumlah: 9 },
  { pekerjaan: "Buruh Tani", jumlah: 30 },
  { pekerjaan: "Honorer", jumlah: 36 },
  { pekerjaan: "Tukang Bentor", jumlah: 10 },
];

export const dataReligion = {
  labels: ["Islam", "Kristen", "Katolik", "Hindu", "Buddha", "Konghucu"],
  datasets: [
    {
      label: "Jumlah Penganut (Juta)",
      data: [230, 70, 50, 20, 15, 5], // Dummy data
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)", // Islam
        "rgba(54, 162, 235, 0.6)", // Kristen
        "rgba(255, 206, 86, 0.6)", // Katolik
        "rgba(75, 192, 192, 0.6)", // Hindu
        "rgba(153, 102, 255, 0.6)", // Buddha
        "rgba(255, 159, 64, 0.6)", // Konghucu
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
export const dataStunting = {
  labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
  datasets: [
    {
      label: "Tingkat Stunting (%)",
      data: [1, 2, 1.5, 2.1, 2.6, 1.1], // Data persen stunting per tahun
      backgroundColor: "rgba(54, 162, 235, 0.7)", // Warna batang chart
      borderColor: "rgba(54, 162, 235, 1)", // Warna border batang chart
      borderWidth: 1, // Ketebalan border
    },
  ],
};

// utils/dummyData.js
export const apbData = {
  year: 2024,
  village: "Desa Digital Gorontalo",
  subdistrict: "Kecamatan Gorontalo ",
  regency: "Kabupaten Gorontalo",
  province: "Provinsi Gorontalo",
  pendapatan: 10240759050,
  belanja: 10546289063,
  pembiayaan: {
    penerimaan: 365530013,
    pengeluaran: 60000000000,
  },
  surplus: 0,
};
export const dataBP = {
  labels: ["2021", "2023", "2024"],
  datasets: [
    {
      label: "Pendapatan",
      data: [0, 7569588925, 10240759050],
      backgroundColor: "rgba(0, 51, 102, 0.8)", // Warna biru tua
    },
    {
      label: "Belanja",
      data: [4747442000, 7863145133, 10546289063],
      backgroundColor: "rgba(108, 92, 231, 1)", // Warna hijau tua
    },
  ],
};

export const apbDummyData = [
  {
    year: 2024,
    village: "Desa Alata Karya",
    subdistrict: "Kecamatan Gorontalo",
    regency: "Kabupaten Gorontalo Utara",
    province: "Provinsi Gorontalo",
    pendapatan: 150000000,
    belanja: 120000000,
    pembiayaan: { penerimaan: 50000000, pengeluaran: 30000000 },
    surplus: 20000000,
    allYears: [2024, 2023, 2022],
  },
  {
    year: 2023,
    village: "Desa Alata Karya",
    subdistrict: "Kecamatan Gorontalo",
    regency: "Kabupaten Gorontalo Utara",
    province: "Provinsi Gorontalo",
    pendapatan: 140000000,
    belanja: 110000000,
    pembiayaan: { penerimaan: 40000000, pengeluaran: 25000000 },
    surplus: 15000000,
    allYears: [2024, 2023, 2022],
  },
  {
    year: 2022,
    village: "Desa Alata Karya",
    subdistrict: "Kecamatan Gorontalo",
    regency: "Kabupaten Gorontalo Utara",
    province: "Provinsi Gorontalo",
    pendapatan: 130000000,
    belanja: 100000000,
    pembiayaan: { penerimaan: 35000000, pengeluaran: 20000000 },
    surplus: 15000000,
    allYears: [2024, 2023, 2022],
  },
];

export const dataIDM = {
  desa: "DESA ALATA KARYA",
  lokasi: "Kabupaten Gorontalo Utara, Provinsi Gorontalo",
  jumlahPenduduk: 4500,
  status: "Desa Maju",
  skorIDM: {
    tahun: [2021, 2022, 2023, 2024, 2025],
    nilai: [0.65, 0.7, 0.72, 0.75, 0.78],
  },
  dimensi: {
    sosial: 0.82,
    ekonomi: 0.72,
    lingkungan: 0.8,
  },
  program: [
    "Pembangunan Jalan & Jembatan Desa",
    "Digitalisasi UMKM",
    "Pengelolaan Sampah & Bank Sampah",
    "Revitalisasi Pasar Desa",
    "Bantuan Pendidikan & Beasiswa",
  ],
};

export const mision = [
  {
    id: 1,
    list: "Meningkatkan kesejahteraan dan keberdayaan masyarakat",
  },
  {
    id: 2,
    list: "Memperkuat ekonomi kerakyatan dan daya saing Desa Alata Karya",
  },
  {
    id: 3,
    list: "Memperkuat moral, etika dan budaya masyarakat Desa Alata Karya",
  },
  {
    id: 4,
    list: "Meningkatkan kualitas pendidikan, kesehatan, sosial dan budaya",
  },
  {
    id: 5,
    list: "Memperkuat tata kota dan kelestarian lingkungan",
  },
  {
    id: 6,
    list: "Membangun sarana prasarana publik dan permukiman",
  },
  {
    id: 7,
    list: "Meningkatkan tatakelola pemerintah yang baik dan bersih",
  },
];

export const lembaga = [
  {
    id: 1,
    image: bumdes,
    nama: "BUMDES",
    slug: "bumdes",
  },
  {
    id: 2,
    image: bpd,
    nama: "BPD",
    slug: "bpd",
  },
  {
    id: 3,
    image: kartar,
    nama: "KARANG TARUNA",
    slug: "karang-taruna",
  },
  {
    id: 4,
    image: pkk,
    nama: "PKK",
    slug: "pkk",
  },
];
