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
    path: "/cek-dpt-online",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisi nisi",
    bgColor: "bg-merah",
  },
  {
    icon: MapIcon,
    name: "Profil Desa",
    path: "/profil-desa",
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
    value: "1658",
  },
  {
    title: "Laki-laki",
    value: "782",
  },
  {
    title: "Perempuan",
    value: "876",
  },
  {
    title: "Kepala Keluarga",
    value: "257",
  },
];
export const apbDes = [
  {
    title: "Pendapatan Desa",
    total: "Rp. 23,435,342.00",
  },
  {
    title: "Dana Desa",
    total: "Rp. 892,812,213.00",
  },
];
export const userData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Colby Covington",
    desc: "Kepala Desa",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jane Smith",
    desc: "Sekeretaris",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Michael Brown",
    desc: "Data Scientist",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Aljamin Davis",
    desc: "Product Manager",
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
    title: "Explore Nature",
    description: "Discover the beauty of the natural world",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHwwfHx8MTcyMTA0MjYwMXww&ixlib=rb-4.0.3&q=80&w=1080",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Culinary Delights",
    image:
      "https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8MHx8fDE3MjEwNDI2MTR8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Tech Innovations",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5fGVufDB8MHx8fDE3MjEwNDI2Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Travel Adventures",
    image:
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0cmF2ZWx8ZW58MHwwfHx8MTcyMTA0MjY0MXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Artistic Expressions",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxhcnR8ZW58MHwwfHx8MTcyMTA0MjY5Nnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Swimming",
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxzd2ltbWluZ3xlbnwwfDB8fHwxNzIxMDQzMjkxfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Chess",
    image:
      "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8Y2hlc3N8ZW58MHwwfHx8MTcyMTA0MzI0Nnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Football",
    image:
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxmb290YmFsbHxlbnwwfDB8fHwxNzIxMDQzMjExfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Cricket",
    image:
      "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxjcmlja2V0fGVufDB8MHx8fDE3MjEwNDMxNTh8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];
export const beritaDummy = [
  {
    id: 1,
    name: "Hutan Amazon Terancam Deforestasi",
    desc: "Deforestasi di Hutan Amazon meningkat drastis akibat penebangan liar dan ekspansi pertanian.",
    image:
      "https://images.unsplash.com/photo-1694614360428-608d018bb054?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Lingkungan",
    date: "2025-01-23",
    path: "/berita",
  },
  {
    id: 2,
    name: "Teknologi AI Mulai Menggantikan Pekerjaan Manusia",
    desc: "Kemajuan dalam kecerdasan buatan (AI) membawa dampak besar terhadap industri dan pekerjaan manusia.",
    image:
      "https://images.unsplash.com/photo-1616161560065-4bbfa1103fde?q=80&w=2714&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Teknologi",
    date: "2025-01-22",
    path: "/berita",
  },
  {
    id: 3,
    name: "Timnas Indonesia Lolos ke Final Piala Asia",
    desc: "Timnas Indonesia berhasil mencapai final setelah mengalahkan tim kuat Jepang di semifinal.",
    image:
      "https://images.unsplash.com/photo-1527871369852-eb58cb2b54e2?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Olahraga",
    date: "2025-01-21",
    path: "/berita",
  },
  {
    id: 4,
    name: "Krisis Pangan Global Mengancam Negara Berkembang",
    desc: "Kelangkaan bahan pangan dan kenaikan harga berdampak pada kesejahteraan masyarakat di berbagai negara.",
    image:
      "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Ekonomi",
    date: "2025-01-20",
    path: "/berita",
  },
  {
    id: 5,
    name: "Kebakaran di Pulau Bali Mengancam Kesejahteraan Masyarakat",
    desc: "Kebakaran di Pulau Bali menyebabkan bencana alam yang membahayakan kesejahteraan masyarakat di sekitar pulau.",
    image:
      "https://plus.unsplash.com/premium_photo-1672759455907-bdaef741cd88?q=80&w=2916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Kesehatan",
    date: "2025-01-19",
    path: "/berita",
  },
  {
    id: 6,
    name: "Pemerintah Mengeluarkan Pembatasan Pajak di Indonesia",
    desc: "Pemerintah mengeluarkan pembatasan pajak untuk mengurangi ketidakmampuan masyarakat di sekitar pulau.",
    image:
      "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Ekonomi",
    date: "2025-01-18",
    path: "/berita",
  },
  {
    id: 7,
    name: "Pemerintah Mengeluarkan Pembatasan Pajak di Indonesia",
    desc: "Pemerintah mengeluarkan pembatasan pajak untuk mengurangi ketidakmampuan masyarakat di sekitar pulau.",
    image:
      "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Ekonomi",
    date: "2025-01-17",
    path: "/berita",
  },
  {
    id: 8,
    name: "Pemerintah Mengeluarkan Pembatasan Pajak di Indonesia",
    desc: "Pemerintah mengeluarkan pembatasan pajak untuk mengurangi ketidakmampuan masyarakat di sekitar pulau.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Ekonomi",
    date: "2025-01-16",
    path: "/berita",
  },
  {
    id: 9,
    name: "Pemerintah Mengeluarkan Pembatasan Pajak di Indonesia",
    desc: "Pemerintah mengeluarkan pembatasan pajak untuk mengurangi ketidakmampuan masyarakat di sekitar pulau.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Ekonomi",
    date: "2025-01-16",
    path: "/berita",
  },
  {
    id: 10,
    name: "Pemerintah Mengeluarkan Pembatasan Pajak di Indonesia",
    desc: "Pemerintah mengeluarkan pembatasan pajak untuk mengurangi ketidakmampuan masyarakat di sekitar pulau.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Ekonomi",
    date: "2025-01-16",
    path: "/berita",
  },
  {
    id: 11,
    name: "Pemerintah Mengeluarkan Pembatasan Pajak di Indonesia",
    desc: "Pemerintah mengeluarkan pembatasan pajak untuk mengurangi ketidakmampuan masyarakat di sekitar pulau.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Ekonomi",
    date: "2025-01-16",
    path: "/berita",
  },
  {
    id: 12,
    name: "Pemerintah Mengeluarkan Pembatasan Pajak di Indonesia",
    desc: "Pemerintah mengeluarkan pembatasan pajak untuk mengurangi ketidakmampuan masyarakat di sekitar pulau.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Ekonomi",
    date: "2025-01-16",
    path: "/berita",
  },
  {
    id: 13,
    name: "Pemerintah Mengeluarkan Pembatasan Pajak di Indonesia",
    desc: "Pemerintah mengeluarkan pembatasan pajak untuk mengurangi ketidakmampuan masyarakat di sekitar pulau.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Ekonomi",
    date: "2025-01-16",
    path: "/berita",
  },
  {
    id: 14,
    name: "Pemerintah Mengeluarkan Pembatasan Pajak di Indonesia",
    desc: "Pemerintah mengeluarkan pembatasan pajak untuk mengurangi ketidakmampuan masyarakat di sekitar pulau.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Ekonomi",
    date: "2025-01-16",
    path: "/berita",
  },
  {
    id: 15,
    name: "Pemerintah Mengeluarkan Pembatasan Pajak di Indonesia",
    desc: "Pemerintah mengeluarkan pembatasan pajak untuk mengurangi ketidakmampuan masyarakat di sekitar pulau.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Ekonomi",
    date: "2025-01-16",
    path: "/berita",
  },
  {
    id: 16,
    name: "Pemerintah Mengeluarkan Pembatasan Pajak di Indonesia",
    desc: "Pemerintah mengeluarkan pembatasan pajak untuk mengurangi ketidakmampuan masyarakat di sekitar pulau.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Ekonomi",
    date: "2025-01-16",
    path: "/berita",
  },
];

export const heroDummy = [
  {
    name: "Colby Covington, U.FC",
    title: "Sabutan Kepala Desa",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod, lacus eget aliquamtincidunt, lorem nisl aliquet nunc, sit amet ornare nunc nisi euismod lacus. Vestibulum euismod, lacus eget aliquam tincidunt,lorem nisl aliquet nunc, sit amet ornare nunc nisi euismod lacu",
    image: bgKades,
  },
];
export const heroDummy2 = [
  {
    name: "VISI & MISI",
    title: "VISI",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod, lacus eget aliquamtincidunt, lorem nisl aliquet nunc, sit amet ornare nunc nisi euismod lacus. Vestibulum euismod, lacus eget aliquam tincidunt,lorem nisl aliquet nunc, sit amet ornare nunc nisi euismod lacu",
    misi: "MISI",
    paragraphMisi:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod, lacus eget aliquamtincidunt, lorem nisl aliquet nunc, sit amet ornare nunc nisi euismod lacus. Vestibulum euismod, lacus eget aliquam tincidunt,lorem nisl aliquet nunc, sit amet ornare nunc nisi euismod lacu",
    image: logoBg,
    namaDesa: "DESA DIGITAL",
    alamatDesa: "Jl. Raya, Dusun 1, Kec. Dusun, Kabupaten, Provinsi, Kode Pos",
  },
];
export const heroDummy3 = [
  {
    image:
      "https://images.unsplash.com/photo-1597047085528-914c8aa0623d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Sejarah Desa Digital",
    desc: "Desa digital adalah sebuah desa yang terdiri dari penduduk-penduduk yang berasal dari berbagai daerah di Indonesia. Desa digital terdiri dari berbagai komunitas yang saling berhubungan dan berkolaborasi untuk mencapai tujuan dalam meningkatkan kualitas hidup dan kesejahteraan masyarakat. Desa digital juga memiliki sistem pemerintahan yang terintegrasi dan terpadu yang memungkinkan pemerintah untuk mengelola dan mengendalikan seluruh aspek kehidupan masyarakat.",
    namaDesa: "DESA DIGITAL",
    alamatDesa: "Jl. Raya, Dusun 1, Kec. Dusun, Kabupaten, Provinsi, Kode Pos",
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
  { pekerjaan: "Belum/Tidak Bekerja", jumlah: 1 },
  { pekerjaan: "Anggota DPRD Provinsi", jumlah: 0 },
  { pekerjaan: "Bidan", jumlah: 0 },
  { pekerjaan: "Pemeluk Agama", jumlah: 0 },
  { pekerjaan: "Pelajar/Mahasiswa", jumlah: 0 },
  { pekerjaan: "Perdagangan", jumlah: 0 },
  { pekerjaan: "Petani/Pekebun", jumlah: 0 },
  { pekerjaan: "Buruh Harian Lepas", jumlah: 0 },
  { pekerjaan: "Anggota DPR-RI", jumlah: 0 },
  { pekerjaan: "Penata Busana", jumlah: 0 },
  { pekerjaan: "Dokter", jumlah: 0 },
  { pekerjaan: "Pialang", jumlah: 0 },
  { pekerjaan: "Buruh Usaha Jasa Transportasi dan Perhubungan", jumlah: 0 },
  { pekerjaan: "Pedagang Keliling", jumlah: 0 },
  { pekerjaan: "Walikota", jumlah: 0 },
  { pekerjaan: "Buruh Migran", jumlah: 0 },
  { pekerjaan: "Pemulung", jumlah: 0 },
  { pekerjaan: "Presiden", jumlah: 0 },
  { pekerjaan: "Apoteker", jumlah: 0 },
  { pekerjaan: "Dokter Swasta", jumlah: 0 },
  { pekerjaan: "Konsultan Manajemen dan Teknis", jumlah: 0 },
  { pekerjaan: "Pemilik Usaha Warung, Rumah Makan dan Restoran", jumlah: 0 },
  { pekerjaan: "Paraji", jumlah: 0 },
  { pekerjaan: "Anggota BPK", jumlah: 0 },
  { pekerjaan: "Psikiater/Psikolog", jumlah: 0 },
  { pekerjaan: "Buruh Usaha Jasa Informasi dan Komunikasi", jumlah: 0 },
  { pekerjaan: "Wakil Gubernur", jumlah: 0 },
  { pekerjaan: "Pedagang", jumlah: 0 },
  { pekerjaan: "Penambang", jumlah: 0 },
  { pekerjaan: "Satpam/Security", jumlah: 0 },
  { pekerjaan: "Jasa Penyewaan Peralatan Pesta", jumlah: 0 },
  { pekerjaan: "Pemilik Usaha Hotel dan Penginapan Lainnya", jumlah: 0 },
  { pekerjaan: "Pengrajin", jumlah: 0 },
  { pekerjaan: "Tentara Nasional Indonesia (TNI)", jumlah: 0 },
  { pekerjaan: "Kepolisian RI (Polri)", jumlah: 0 },
  { pekerjaan: "Penata Rambut", jumlah: 0 },
  { pekerjaan: "Bupati", jumlah: 0 },
  { pekerjaan: "Ahli Pengobatan Alternatif", jumlah: 0 },
  { pekerjaan: "Tukang Sumur", jumlah: 0 },
  { pekerjaan: "Mengurus Rumah Tangga", jumlah: 0 },
  { pekerjaan: "Jasa Konsultasi Manajemen dan Teknis", jumlah: 0 },
  { pekerjaan: "Wakil Walikota", jumlah: 0 },
  { pekerjaan: "Pengusaha Perdagangan Hasil Bumi", jumlah: 0 },
  { pekerjaan: "Tidak Mempunyai Pekerjaan Tetap", jumlah: 0 },
  { pekerjaan: "Anggota Legislatif", jumlah: 0 },
  { pekerjaan: "Pembantu Rumah Tangga", jumlah: 0 },
  { pekerjaan: "Tukang Las/Pandai Besi", jumlah: 0 },
  { pekerjaan: "Tukang Gigi", jumlah: 0 },
  { pekerjaan: "Seniman", jumlah: 0 },
  { pekerjaan: "Perawat", jumlah: 0 },
  { pekerjaan: "Juru Masak", jumlah: 0 },
  { pekerjaan: "Promotor Acara", jumlah: 0 },
  { pekerjaan: "Lainnya", jumlah: 0 },
  { pekerjaan: "Karyawan BUMD", jumlah: 0 },
  { pekerjaan: "Tukang Kayu", jumlah: 0 },
  { pekerjaan: "Penata Rias", jumlah: 0 },
  { pekerjaan: "Pedagang Barang Kelontong", jumlah: 0 },
  { pekerjaan: "Pelaut", jumlah: 0 },
  { pekerjaan: "Buruh Usaha Jasa Hiburan dan Pariwisata", jumlah: 0 },
  { pekerjaan: "Tukang Jahit", jumlah: 0 },
  { pekerjaan: "Wakil Presiden", jumlah: 0 },
  { pekerjaan: "Dosen", jumlah: 0 },
  { pekerjaan: "Kontraktor", jumlah: 0 },
  { pekerjaan: "Tukang Kue", jumlah: 0 },
  { pekerjaan: "Notaris", jumlah: 0 },
  { pekerjaan: "Nelayan/Perikanan", jumlah: 0 },
  { pekerjaan: "Buruh Tani/Perkebunan", jumlah: 0 },
  { pekerjaan: "Pendeta", jumlah: 0 },
  { pekerjaan: "Kepala Desa", jumlah: 0 },
  { pekerjaan: "Pengrajin Industri Rumah Tangga", jumlah: 0 },
  { pekerjaan: "Karyawan Honorer", jumlah: 0 },
  { pekerjaan: "Tukang Cukur", jumlah: 0 },
  { pekerjaan: "Biarawati", jumlah: 0 },
  { pekerjaan: "Bidan Swasta", jumlah: 0 },
  { pekerjaan: "Karyawan Swasta", jumlah: 0 },
  { pekerjaan: "Buruh Peternakan", jumlah: 0 },
  { pekerjaan: "Pemilik Usaha Informasi dan Komunikasi", jumlah: 0 },
  { pekerjaan: "Pemilik Usaha Jasa Transportasi dan Perhubungan", jumlah: 0 },
  { pekerjaan: "Usaha Jasa Pengerah Tenaga Kerja", jumlah: 0 },
  { pekerjaan: "Dukun Tradisional", jumlah: 0 },
  { pekerjaan: "Pensiunan", jumlah: 0 },
  { pekerjaan: "Buruh Nelayan/Perikanan", jumlah: 0 },
  { pekerjaan: "Mekanik", jumlah: 0 },
  { pekerjaan: "Arsitek", jumlah: 0 },
  { pekerjaan: "Penyiar Televisi", jumlah: 0 },
  { pekerjaan: "Konstruksi", jumlah: 0 },
  { pekerjaan: "Dosen Swasta", jumlah: 0 },
  { pekerjaan: "Pemilik Usaha Jasa Hiburan dan Pariwisata", jumlah: 0 },
  { pekerjaan: "Peneliti", jumlah: 0 },
  { pekerjaan: "Penerjemah", jumlah: 0 },
  { pekerjaan: "Imam Masjid", jumlah: 0 },
  { pekerjaan: "Wartawan", jumlah: 0 },
  { pekerjaan: "Pilot", jumlah: 0 },
  { pekerjaan: "Montir", jumlah: 0 },
  { pekerjaan: "Ustaz/Mubalig", jumlah: 0 },
  { pekerjaan: "Duta Besar", jumlah: 0 },
  { pekerjaan: "Paranormal", jumlah: 0 },
  { pekerjaan: "Arsitektur/Desainer", jumlah: 0 },
  { pekerjaan: "Buruh Jasa Perdagangan Hasil Bumi", jumlah: 0 },
  { pekerjaan: "Tukang Listrik", jumlah: 0 },
  { pekerjaan: "Tukang Sol Sepatu", jumlah: 0 },
  { pekerjaan: "Guru Swasta", jumlah: 0 },
  { pekerjaan: "Pemilik Perusahaan", jumlah: 0 },
  { pekerjaan: "Tukang Batu", jumlah: 0 },
  { pekerjaan: "Penyiar Radio", jumlah: 0 },
  { pekerjaan: "Buruh Usaha Hotel dan Penginapan Lainnya", jumlah: 0 },
  { pekerjaan: "Tukang Anyaman", jumlah: 0 },
  { pekerjaan: "Anggota DPRD Kabupaten/Kota", jumlah: 0 },
  { pekerjaan: "Jasa Pengobatan Alternatif", jumlah: 0 },
  { pekerjaan: "Sopir", jumlah: 0 },
  { pekerjaan: "Industri", jumlah: 0 },
  { pekerjaan: "Karyawan BUMN", jumlah: 0 },
  { pekerjaan: "Tabib", jumlah: 0 },
  { pekerjaan: "Pastor", jumlah: 0 },
  { pekerjaan: "Pegawai Negeri Sipil (PNS)", jumlah: 0 },
  { pekerjaan: "Guru", jumlah: 0 },
  { pekerjaan: "Akuntan", jumlah: 0 },
  { pekerjaan: "Wiraswasta", jumlah: 0 },
  { pekerjaan: "Pengacara", jumlah: 0 },
  { pekerjaan: "Perawat Swasta", jumlah: 0 },
  { pekerjaan: "Gubernur", jumlah: 0 },
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
      data: [30.8, 27.7, 24.4, 22.1, 21.6, 20.2], // Data persen stunting per tahun
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

export const newsData = [
  {
    id: 1,
    title: "AI Mengubah Dunia Teknologi: Dampak dan Masa Depan",
    description:
      "Artificial Intelligence (AI) semakin berkembang dan mulai memengaruhi berbagai sektor kehidupan manusia. Dari industri manufaktur hingga layanan kesehatan, AI membantu meningkatkan efisiensi serta mengurangi kesalahan manusia. Banyak perusahaan teknologi besar berlomba-lomba mengembangkan kecerdasan buatan yang lebih canggih, dengan tujuan menciptakan sistem yang mampu berpikir dan belajar secara mandiri. Namun, di balik semua manfaatnya, ada pula tantangan yang harus dihadapi, seperti masalah etika dan ancaman pengangguran akibat otomatisasi pekerjaan.",
    author: "Admin",
    category: "Teknologi",
    date: 10,
    month: "Januari",
    image:
      "https://source.unsplash.com/600x300/?artificial-intelligence,technology",
  },
  {
    id: 2,
    title: "Perkembangan Terbaru di Dunia Web Development",
    description:
      "Industri web development terus berkembang pesat, dengan berbagai teknologi baru yang muncul setiap tahunnya. React, Vue, dan Svelte kini bersaing ketat dalam menawarkan solusi pengembangan front-end yang lebih efisien. Sementara itu, backend development juga mengalami inovasi dengan penggunaan serverless architecture dan microservices. Para developer diharapkan untuk terus belajar dan beradaptasi dengan perubahan ini agar tetap relevan di industri yang sangat dinamis ini.",
    author: "Admin",
    category: "Web Development",
    date: 12,
    month: "Januari",
    image: "https://source.unsplash.com/600x300/?web,development",
  },
  {
    id: 3,
    title: "Startup Teknologi di Indonesia Kian Bertumbuh",
    description:
      "Indonesia kini menjadi salah satu negara dengan pertumbuhan startup teknologi yang sangat pesat. Banyak startup lokal yang sukses mendapatkan pendanaan dari investor asing, terutama di bidang fintech, e-commerce, dan edutech. Namun, di tengah perkembangan pesat ini, tantangan seperti regulasi pemerintah dan persaingan pasar yang ketat masih menjadi kendala utama bagi banyak startup untuk berkembang lebih jauh.",
    author: "Admin",
    category: "Bisnis",
    date: 15,
    month: "Januari",
    image: "https://source.unsplash.com/600x300/?startup,business",
  },
  {
    id: 4,
    title: "Cybersecurity: Cara Melindungi Data Pribadi Anda",
    description:
      "Keamanan data pribadi menjadi isu yang semakin penting di era digital saat ini. Dengan semakin banyaknya kasus kebocoran data dan serangan siber, pengguna internet harus lebih waspada dalam menjaga informasi pribadi mereka. Beberapa langkah yang bisa dilakukan antara lain menggunakan password yang kuat, mengaktifkan autentikasi dua faktor, dan tidak sembarangan mengklik tautan mencurigakan. Selain itu, perusahaan juga harus berinvestasi dalam sistem keamanan yang lebih canggih untuk melindungi data pelanggan mereka.",
    author: "Admin",
    category: "Keamanan",
    date: 18,
    month: "Januari",
    image: "https://source.unsplash.com/600x300/?cybersecurity,hacking",
  },
  {
    id: 5,
    title: "Masa Depan Cryptocurrency di Tahun 2025",
    description:
      "Cryptocurrency terus menjadi topik hangat di dunia keuangan. Meskipun masih mengalami fluktuasi harga yang tinggi, banyak investor yang tetap optimis terhadap masa depan Bitcoin dan altcoin lainnya. Beberapa negara mulai merancang regulasi yang lebih jelas terkait aset digital ini, sementara perusahaan besar seperti Tesla dan Square telah mulai menerima pembayaran menggunakan crypto. Namun, masih ada tantangan besar yang harus diatasi, termasuk isu keamanan, adopsi massal, dan dampaknya terhadap lingkungan.",
    author: "Admin",
    category: "Keuangan",
    date: 21,
    month: "Januari",
    image: "https://source.unsplash.com/600x300/?cryptocurrency,bitcoin",
  },
  {
    id: 6,
    title: "Peran Machine Learning dalam Dunia Medis",
    description:
      "Teknologi machine learning kini semakin banyak diterapkan dalam dunia kesehatan. Dengan kemampuan untuk menganalisis data dalam jumlah besar, AI mampu membantu dokter dalam membuat diagnosa yang lebih akurat dan cepat. Contohnya, beberapa rumah sakit telah menggunakan AI untuk mendeteksi kanker pada tahap awal melalui analisis gambar medis. Selain itu, AI juga digunakan untuk mengembangkan obat-obatan baru dengan proses yang lebih cepat dibandingkan metode konvensional.",
    author: "Admin",
    category: "Kesehatan",
    date: 24,
    month: "Januari",
    image: "https://source.unsplash.com/600x300/?healthcare,ai",
  },
  {
    id: 7,
    title: "Teknologi 5G: Manfaat dan Tantangan",
    description:
      "Jaringan 5G telah mulai diimplementasikan di berbagai negara, termasuk Indonesia. Dengan kecepatan internet yang jauh lebih tinggi dibandingkan 4G, teknologi ini diharapkan dapat membuka peluang baru dalam berbagai sektor, seperti Internet of Things (IoT), kendaraan otonom, dan smart cities. Namun, di balik potensinya yang besar, ada beberapa tantangan yang harus dihadapi, seperti biaya infrastruktur yang tinggi dan kekhawatiran terkait kesehatan akibat radiasi gelombang elektromagnetik.",
    author: "Admin",
    category: "Teknologi",
    date: 27,
    month: "Januari",
    image: "https://source.unsplash.com/600x300/?5g,network",
  },
  {
    id: 8,
    title: "Tips Meningkatkan Performa Website",
    description:
      "Kecepatan website merupakan faktor yang sangat penting dalam pengalaman pengguna dan peringkat SEO. Beberapa cara untuk meningkatkan performa website antara lain adalah dengan mengoptimalkan gambar, menggunakan teknik lazy loading, serta memanfaatkan Content Delivery Network (CDN). Selain itu, pemilihan hosting yang tepat juga berperan besar dalam menentukan kecepatan akses website. Dengan menerapkan praktik terbaik ini, website dapat menjadi lebih responsif dan memberikan pengalaman terbaik bagi pengunjung.",
    author: "Admin",
    category: "Web Development",
    date: 30,
    month: "Januari",
    image: "https://source.unsplash.com/600x300/?website,speed",
  },
  {
    id: 9,
    title: "Evolusi Desain UI/UX di Tahun 2024",
    description:
      "Desain UI/UX terus mengalami perubahan seiring dengan perkembangan teknologi dan kebutuhan pengguna. Pada tahun 2024, beberapa tren yang diprediksi akan mendominasi adalah desain minimalis, dark mode, serta penggunaan animasi mikro untuk meningkatkan interaksi pengguna. Selain itu, AI juga mulai digunakan dalam proses desain, membantu desainer untuk menghasilkan tampilan yang lebih personal dan intuitif berdasarkan data pengguna.",
    author: "Admin",
    category: "Desain",
    date: 2,
    month: "Februari",
    image: "https://source.unsplash.com/600x300/?uiux,design",
  },
  {
    id: 10,
    title: "Metaverse dan Masa Depan Interaksi Digital",
    description:
      "Metaverse kini menjadi perbincangan hangat di dunia teknologi. Konsep dunia virtual yang dapat diakses melalui perangkat VR dan AR ini diyakini akan mengubah cara manusia berinteraksi, bekerja, dan bermain. Beberapa perusahaan besar seperti Meta (Facebook) dan Microsoft telah menginvestasikan miliaran dolar untuk mengembangkan ekosistem metaverse mereka. Namun, masih ada banyak tantangan yang harus diatasi, seperti masalah privasi, keamanan, serta kesiapan infrastruktur teknologi yang mendukung konsep ini.",
    author: "Admin",
    category: "Teknologi",
    date: 5,
    month: "Februari",
    image: "https://source.unsplash.com/600x300/?metaverse,vr",
  },
];
