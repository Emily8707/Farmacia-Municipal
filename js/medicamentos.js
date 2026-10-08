// ============================================================
// DATOS DE MEDICAMENTOS (104) - cada uno con imagen única
// ============================================================
let medicamentos = [
    { id: '001', nombre: 'Acarbosa', presentacion: 'Suspensión', concentracion: '200mg/5ml', categoria: 'Antidiabético', stock: 368, stockMin: 50, precioUnidad: 5.59, precioCaja: 5.59, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK7kqxSHC3Idxm_B16eJP_qIoHvDhavG7pklxQlMUXgQuYBvqueIhAQFE&s=10' },
    { id: '002', nombre: 'Acarbosa', presentacion: 'Inyección', concentracion: '50mg/ml', categoria: 'Antidiabético', stock: 87, stockMin: 100, precioUnidad: 2.04, precioCaja: 2.04, unidadesCaja: 1, imagen: 'https://aws.farmasmart.com/app/uploads/2024/08/7501349028661.webp' },
    { id: '003', nombre: 'Acarbosa', presentacion: 'Jarabe', concentracion: '100mg/5ml', categoria: 'Antidiabético', stock: 631, stockMin: 50, precioUnidad: 5.91, precioCaja: 5.91, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1TRWYyChjLMg9eI9uc2_UvT6jxc7a4tFawhLuEqRchA&s=10' },
    { id: '004', nombre: 'Acarbosa', presentacion: 'Cápsula', concentracion: '250mg', categoria: 'Antidiabético', stock: 861, stockMin: 100, precioUnidad: 3.74, precioCaja: 112.20, unidadesCaja: 30, imagen: 'https://grupofarmapronto.com/wp-content/uploads/2022/07/7501349028661.jpg' },
    { id: '005', nombre: 'Acarbosa', presentacion: 'Tableta', concentracion: '500mg', categoria: 'Antidiabético', stock: 296, stockMin: 50, precioUnidad: 2.33, precioCaja: 69.90, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyISQ1ZebEZT_oLFtlEB9Ks3kpFToJ5o129ZLhL7pqa-cfMzOKMNqF_6A&s=10' },
    { id: '006', nombre: 'Acetaminofén', presentacion: 'Suspensión', concentracion: '200mg/5ml', categoria: 'Analgésico', stock: 277, stockMin: 50, precioUnidad: 5.17, precioCaja: 5.17, unidadesCaja: 1, imagen: 'https://dimedsol.com/wp-content/uploads/2024/03/ACETAMINOFEN-oral.webp' },
    { id: '007', nombre: 'Acetaminofén', presentacion: 'Inyección', concentracion: '50mg/ml', categoria: 'Analgésico', stock: 256, stockMin: 50, precioUnidad: 7.39, precioCaja: 7.39, unidadesCaja: 1, imagen: 'https://farmaciasantabarbara1.com/app/media/instancia_cliente/ic32/producto/29864/FS0391.jpg' },
    { id: '008', nombre: 'Acetaminofén', presentacion: 'Jarabe', concentracion: '100mg/5ml', categoria: 'Analgésico', stock: 162, stockMin: 50, precioUnidad: 6.80, precioCaja: 6.80, unidadesCaja: 1, imagen: 'https://farmaciasdeoccidente.com.gt/wp-content/uploads/13567.webp' },
    { id: '009', nombre: 'Acetaminofén', presentacion: 'Cápsula', concentracion: '250mg', categoria: 'Analgésico', stock: 724, stockMin: 100, precioUnidad: 6.80, precioCaja: 204.00, unidadesCaja: 30, imagen: 'https://cofarca.net/wp-content/uploads/2025/09/Gamma-6.png' },
    { id: '010', nombre: 'Acetaminofén', presentacion: 'Tableta', concentracion: '500mg', categoria: 'Analgésico', stock: 855, stockMin: 100, precioUnidad: 4.50, precioCaja: 135.00, unidadesCaja: 30, imagen: 'https://walmartgt.vtexassets.com/arquivos/ids/290758/Acetaminofen-Mk-500-Mg-X-100-Tabletas-2-32809.jpg?v=637955914860370000' },
    { id: '011', nombre: 'Aciclovir', presentacion: 'Tableta', concentracion: '500mg', categoria: 'Antibiótico', stock: 237, stockMin: 50, precioUnidad: 8.40, precioCaja: 252.00, unidadesCaja: 30, imagen: 'https://selectpharma.com.gt/wp-content/uploads/2025/11/selectpharma-aciclovir-tabletas.webp' },
    { id: '012', nombre: 'Aciclovir', presentacion: 'Suspensión', concentracion: '200mg/5ml', categoria: 'Antibiótico', stock: 145, stockMin: 50, precioUnidad: 9.80, precioCaja: 9.80, unidadesCaja: 1, imagen: 'https://imagenes.gozeri.com/productos/129164-1-1693547018.png' },
    { id: '013', nombre: 'Ambroxol', presentacion: 'Jarabe', concentracion: '15mg/5ml', categoria: 'Respiratorio', stock: 320, stockMin: 50, precioUnidad: 6.20, precioCaja: 6.20, unidadesCaja: 1, imagen: 'https://static.kemikcdn.com/2025/09/SF-AMBROX-120ML-1200x1200-1.jpg' },
    { id: '014', nombre: 'Ambroxol', presentacion: 'Tableta', concentracion: '30mg', categoria: 'Respiratorio', stock: 415, stockMin: 50, precioUnidad: 3.80, precioCaja: 114.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW1YzsxH3BNsLX2EmPcUROod5KZbJcRD-VuYV2-8SokA&s=10' },
    { id: '015', nombre: 'Amlodipino', presentacion: 'Cápsula', concentracion: '5mg', categoria: 'Antihipertensivo', stock: 664, stockMin: 100, precioUnidad: 4.20, precioCaja: 126.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFTNm44o-DCW-f_iBfy-jkCI5z0zXqNEJ5NaBhY21rMA&s=10' },
    { id: '016', nombre: 'Amlodipino', presentacion: 'Tableta', concentracion: '10mg', categoria: 'Antihipertensivo', stock: 512, stockMin: 100, precioUnidad: 5.30, precioCaja: 159.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvL2pBu_ecplPYLVvSQcYI1QUnAhMWaXWyBp1cOADJ_g&s=10' },
    { id: '017', nombre: 'Amoxicilina', presentacion: 'Cápsula', concentracion: '500mg', categoria: 'Antibiótico', stock: 450, stockMin: 100, precioUnidad: 5.90, precioCaja: 177.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNqS7i9u8mvTUWCldStMXg9LK4EeTQvJHu_FrEt0cUdA&s=10' },
    { id: '018', nombre: 'Amoxicilina', presentacion: 'Suspensión', concentracion: '250mg/5ml', categoria: 'Antibiótico', stock: 320, stockMin: 50, precioUnidad: 7.20, precioCaja: 7.20, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhtU8xGYm_cLugA_4UVbWjF_OwmjV9j62jbM9utoj1Aw&s=10' },
    { id: '019', nombre: 'Amoxicilina', presentacion: 'Jarabe', concentracion: '125mg/5ml', categoria: 'Antibiótico', stock: 280, stockMin: 50, precioUnidad: 8.50, precioCaja: 8.50, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHc3cNzVlnBrzmcmdvsyrIvvMjsLtS7VYFBJWC8n6y3w&s=10' },
    { id: '020', nombre: 'Aspirina', presentacion: 'Tableta', concentracion: '500mg', categoria: 'Analgésico', stock: 890, stockMin: 100, precioUnidad: 2.10, precioCaja: 63.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGwL8LJ7AEC7S_tH96LnLcUqauxsGZSIlklqCIYHtKmQ&s=10' },
    { id: '021', nombre: 'Aspirina', presentacion: 'Tableta', concentracion: '100mg', categoria: 'Antiinflamatorio', stock: 720, stockMin: 100, precioUnidad: 1.80, precioCaja: 54.00, unidadesCaja: 30, imagen: 'https://www.plmconnection.com/plmservices/PharmaSearchEngine/Peru/DEF/SIDEF/400x400/bayer_aspirina100_tabs100_100mg_caja.png' },
    { id: '022', nombre: 'Atenolol', presentacion: 'Tableta', concentracion: '50mg', categoria: 'Antihipertensivo', stock: 480, stockMin: 100, precioUnidad: 3.40, precioCaja: 102.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBsKyhgOx-Zyryf245s-_300jh-u9BeXVUSQqNL-Gphw&s=10' },
    { id: '023', nombre: 'Azitromicina', presentacion: 'Tableta', concentracion: '500mg', categoria: 'Antibiótico', stock: 385, stockMin: 100, precioUnidad: 12.50, precioCaja: 375.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVCwruMrxyaskcBc8kowipaAYEkgiSKjnq-vky8mLItQ&s=10' },
    { id: '024', nombre: 'Azitromicina', presentacion: 'Suspensión', concentracion: '200mg/5ml', categoria: 'Antibiótico', stock: 210, stockMin: 50, precioUnidad: 15.80, precioCaja: 15.80, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdgbeMlBWbCAJa_0ncaVKhulY6dlKeQ9hXzcaqHLTmJQ&s=10' },
    { id: '025', nombre: 'Bismuto', presentacion: 'Suspensión', concentracion: '200mg/5ml', categoria: 'Gastrointestinal', stock: 388, stockMin: 50, precioUnidad: 5.65, precioCaja: 5.65, unidadesCaja: 1, imagen: 'https://production-media.fahorro.com/media/catalog/product/7/5/7502276850738_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=144&width=144&canvas=144:144' },
    { id: '026', nombre: 'Bromhexina', presentacion: 'Jarabe', concentracion: '4mg/5ml', categoria: 'Respiratorio', stock: 583, stockMin: 50, precioUnidad: 5.90, precioCaja: 5.90, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkjGKjpiVOt5gNk6kmLiJqExzTb_xboowXuoOYKPuviA&s=10' },
    { id: '027', nombre: 'Bromhexina', presentacion: 'Tableta', concentracion: '8mg', categoria: 'Respiratorio', stock: 425, stockMin: 50, precioUnidad: 3.60, precioCaja: 108.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMjF5QdMlB-vOzMatrnCL3FoortCHkAWU10yY25_akQg&s=10' },
    { id: '028', nombre: 'Budesonida', presentacion: 'Inhalador', concentracion: '200mcg', categoria: 'Respiratorio', stock: 165, stockMin: 30, precioUnidad: 45.80, precioCaja: 45.80, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPVvN7zX4i9NERf8aGWH7_1L7MfM7JlcdNtwZMJlNzpg&s' },
    { id: '029', nombre: 'Captopril', presentacion: 'Tableta', concentracion: '25mg', categoria: 'Antihipertensivo', stock: 620, stockMin: 100, precioUnidad: 3.20, precioCaja: 96.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXsRjIL-0-XYy4TuBJh-t1k8a0E_VwFF02UrVxUkOHCg&s=10' },
    { id: '030', nombre: 'Carvedilol', presentacion: 'Tableta', concentracion: '12.5mg', categoria: 'Antihipertensivo', stock: 288, stockMin: 50, precioUnidad: 6.30, precioCaja: 189.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3QjCs_vl_v0GbqgtTN3UZeIrd3ARd2dAv5US9Z4xuBg&s=10' },
    { id: '031', nombre: 'Cefalexina', presentacion: 'Cápsula', concentracion: '500mg', categoria: 'Antibiótico', stock: 390, stockMin: 100, precioUnidad: 6.80, precioCaja: 204.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbJbLZ4qxqKFPNK1p70lf4HXAlVSycPTZp-nz6-urx3w&s=10' },
    { id: '032', nombre: 'Cefalexina', presentacion: 'Suspensión', concentracion: '250mg/5ml', categoria: 'Antibiótico', stock: 280, stockMin: 50, precioUnidad: 9.40, precioCaja: 9.40, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6bwLSHBOUpaWl3hAUz2fE1juqIAUZSuccr1mWJB1-Mg&s=10' },
    { id: '033', nombre: 'Celecoxib', presentacion: 'Jarabe', concentracion: '100mg/5ml', categoria: 'Antiinflamatorio', stock: 383, stockMin: 50, precioUnidad: 11.20, precioCaja: 11.20, unidadesCaja: 1, imagen: 'https://distribuidorasanantonio.com/wp-content/uploads/2023/08/7502216805361-300x300.webp' },
    { id: '034', nombre: 'Celecoxib', presentacion: 'Cápsula', concentracion: '200mg', categoria: 'Antiinflamatorio', stock: 245, stockMin: 50, precioUnidad: 9.80, precioCaja: 294.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyyERMQ0oL1M2TS4DjfwX91SmCSbnO34-t_VsHJTr7eQ&s=10' },
    { id: '035', nombre: 'Cetirizina', presentacion: 'Tableta', concentracion: '10mg', categoria: 'Antiinflamatorio', stock: 35, stockMin: 100, precioUnidad: 2.80, precioCaja: 84.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3-jpS203OgpD2VIS4keoRraTvGZ9C6B1AqQulN5pHxg&s=10' },
    { id: '036', nombre: 'Cetirizina', presentacion: 'Jarabe', concentracion: '5mg/5ml', categoria: 'Antiinflamatorio', stock: 420, stockMin: 50, precioUnidad: 6.40, precioCaja: 6.40, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr0L2iVT_HKV8z-Knit3NF5qJTuFBwPAhajSohISQElQ&s=10' },
    { id: '037', nombre: 'Ciprofloxacino', presentacion: 'Tableta', concentracion: '500mg', categoria: 'Antibiótico', stock: 510, stockMin: 100, precioUnidad: 7.60, precioCaja: 228.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkRCNHAU8zkylPMSbc7GeiZ1K9jROOZOPgHyAY4tEHxw&s=10' },
    { id: '038', nombre: 'Ciprofloxacino', presentacion: 'Inyección', concentracion: '200mg/100ml', categoria: 'Antibiótico', stock: 125, stockMin: 30, precioUnidad: 25.40, precioCaja: 25.40, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUf-3dbZEkphplkY4gaaPWkIo8h8wnpOhvdXQCXuRilg&s=10' },
    { id: '039', nombre: 'Claritromicina', presentacion: 'Tableta', concentracion: '500mg', categoria: 'Antibiótico', stock: 705, stockMin: 80, precioUnidad: 11.20, precioCaja: 336.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ljQ5eqM61K9zetQAm_SSAeSsB6N0cZig_y1UBT2I4w&s=10' },
    { id: '040', nombre: 'Claritromicina', presentacion: 'Suspensión', concentracion: '250mg/5ml', categoria: 'Antibiótico', stock: 415, stockMin: 50, precioUnidad: 14.50, precioCaja: 14.50, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmkVS3O3-v6a5_KreO3oIbr4OPgMv7NNRDL7CG0nWZmw&s=10' },
    { id: '041', nombre: 'Cloranfenicol', presentacion: 'Tableta', concentracion: '500mg', categoria: 'Antibiótico', stock: 347, stockMin: 100, precioUnidad: 6.90, precioCaja: 207.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnM3cNeckjEf6A-HTJM4ZlG47CazL0cb8mSSMIi4sJ6Q&s=10' },
    { id: '042', nombre: 'Cloranfenicol', presentacion: 'Cápsula', concentracion: '250mg', categoria: 'Antibiótico', stock: 265, stockMin: 100, precioUnidad: 5.40, precioCaja: 162.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6CtYUQRJEMKxidVLvEAyrKX4nU_o39YysrY9L2t12ug&s=10' },
    { id: '043', nombre: 'Clonazepam', presentacion: 'Tableta', concentracion: '2mg', categoria: 'Analgésico', stock: 195, stockMin: 50, precioUnidad: 9.60, precioCaja: 288.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTByGpf9NyyD7N_LFdRm7TFjFy30ie4b9WDFh-HHWjWA&s=10' },
    { id: '044', nombre: 'Dexametasona', presentacion: 'Inyección', concentracion: '4mg/ml', categoria: 'Antiinflamatorio', stock: 340, stockMin: 50, precioUnidad: 8.90, precioCaja: 8.90, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQc9rQGNnncKy27ENkgZP7tO_sB7EjXvijqUj2zWoiA&s=10' },
    { id: '045', nombre: 'Dexametasona', presentacion: 'Tableta', concentracion: '4mg', categoria: 'Antiinflamatorio', stock: 480, stockMin: 100, precioUnidad: 4.20, precioCaja: 126.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRQaL42u9gXAYuTEyr64RzxynOEFmIJqwCs7HN5Q7olw&s=10' },
    { id: '046', nombre: 'Diclofenaco', presentacion: 'Tableta', concentracion: '50mg', categoria: 'Antiinflamatorio', stock: 890, stockMin: 100, precioUnidad: 3.10, precioCaja: 93.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFAzn4i60iykSzFbRTPSklvr4whvwxLSlOWX3hY39XdQ&s=10' },
    { id: '047', nombre: 'Diclofenaco', presentacion: 'Gel', concentracion: '1%', categoria: 'Antiinflamatorio', stock: 320, stockMin: 50, precioUnidad: 18.60, precioCaja: 18.60, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK5Pe1FV-t94qCVhMVcu0pxJYJca5keAisOXaELg7goA&s=10' },
    { id: '048', nombre: 'Diclofenaco', presentacion: 'Inyección', concentracion: '75mg/3ml', categoria: 'Antiinflamatorio', stock: 210, stockMin: 50, precioUnidad: 9.80, precioCaja: 9.80, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6BnBHHvnFXRSiHRlwzAiFDi3KanzUH3RtsiOErRKQ-w&s=10' },
    { id: '049', nombre: 'Enalapril', presentacion: 'Tableta', concentracion: '10mg', categoria: 'Antihipertensivo', stock: 545, stockMin: 100, precioUnidad: 4.30, precioCaja: 129.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjYVDlr32LnY6tdgA8EPJmW2u6hYTEz87cabIOv4idRg&s=10' },
    { id: '050', nombre: 'Esomeprazol', presentacion: 'Tableta', concentracion: '40mg', categoria: 'Gastrointestinal', stock: 143, stockMin: 50, precioUnidad: 12.20, precioCaja: 366.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHh2WTbdp1DCi2n-W4WaUWg2nDGdz8o-VkMl6XGdyq_w&s=10' },
    { id: '051', nombre: 'Famotidina', presentacion: 'Suspensión', concentracion: '40mg/5ml', categoria: 'Gastrointestinal', stock: 315, stockMin: 50, precioUnidad: 8.90, precioCaja: 8.90, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYuw2K5AAUco1rG-Jmoaw1QY20fdu9fwJyhzTzFNjODg&s=10' },
    { id: '052', nombre: 'Famotidina', presentacion: 'Tableta', concentracion: '20mg', categoria: 'Gastrointestinal', stock: 420, stockMin: 100, precioUnidad: 5.60, precioCaja: 168.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFCso4iF_JjxHjwhOx-ARy8wS4hGy9YgIBjKejqAtWQ&s=10' },
    { id: '053', nombre: 'Fluconazol', presentacion: 'Suspensión', concentracion: '50mg/5ml', categoria: 'Antibiótico', stock: 445, stockMin: 50, precioUnidad: 13.40, precioCaja: 13.40, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbb8irTnBoczPz40jXs7jr5YWgLGKEymIx2IpgqsYcfA&s=10' },
    { id: '054', nombre: 'Fluconazol', presentacion: 'Cápsula', concentracion: '150mg', categoria: 'Antibiótico', stock: 280, stockMin: 50, precioUnidad: 15.90, precioCaja: 477.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR03WA2NnQT9KcmEIkLKwqaNdA9viXdsMKScpsL5pbYbA&s=10' },
    { id: '055', nombre: 'Furosemida', presentacion: 'Tableta', concentracion: '40mg', categoria: 'Antihipertensivo', stock: 490, stockMin: 100, precioUnidad: 2.60, precioCaja: 78.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkVvL_zwVLo93pthUb48fEiV6C4i8E_pDJ_Nq0_h7tGg&s=10' },
    { id: '056', nombre: 'Gentamicina', presentacion: 'Inyección', concentracion: '80mg/2ml', categoria: 'Antibiótico', stock: 195, stockMin: 50, precioUnidad: 7.20, precioCaja: 7.20, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP1BUixE0k2GmjxnsbH0hR7DVJ1E1TpudrEF7yh3Lf2g&s=10' },
    { id: '057', nombre: 'Glibenclamida', presentacion: 'Tableta', concentracion: '5mg', categoria: 'Antidiabético', stock: 620, stockMin: 100, precioUnidad: 2.40, precioCaja: 72.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4Hm00_JBbIxfdwqsWv4mFsni3khUcRTprATOrF2ICg&s=10' },
    { id: '058', nombre: 'Hidroclorotiazida', presentacion: 'Tableta', concentracion: '25mg', categoria: 'Antihipertensivo', stock: 715, stockMin: 100, precioUnidad: 2.20, precioCaja: 66.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH0-91W-i2zDN8AQUjar35xe-TLqwAYjxtrAsjnEhdQA&s=10' },
    { id: '059', nombre: 'Ibuprofeno', presentacion: 'Tableta', concentracion: '400mg', categoria: 'Antiinflamatorio', stock: 780, stockMin: 100, precioUnidad: 3.15, precioCaja: 94.50, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXiDHn6KZ5zvVzJjNQlpzfUth2Lx1bsRGRzrsUks3Mmw&s=10' },
    { id: '060', nombre: 'Ibuprofeno', presentacion: 'Suspensión', concentracion: '100mg/5ml', categoria: 'Antiinflamatorio', stock: 415, stockMin: 50, precioUnidad: 6.50, precioCaja: 6.50, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkxAAiA5ZPqXXWgrtBA4QY1euSW6FtBSC6IngESmBLVg&s=10' },
    { id: '061', nombre: 'Ibuprofeno', presentacion: 'Cápsula', concentracion: '600mg', categoria: 'Antiinflamatorio', stock: 350, stockMin: 100, precioUnidad: 5.80, precioCaja: 174.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOVVTYFgsR3OBULqeJ3t1pJFXFY-IAeHBTPBG9CTqeMg&s=10' },
    { id: '062', nombre: 'Ketamina', presentacion: 'Cápsula', concentracion: '50mg', categoria: 'Analgésico', stock: 458, stockMin: 50, precioUnidad: 14.20, precioCaja: 426.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3-rr2pI965ZZpA1oz5RSRT_smlG2tC2QuuszeTXud8Q&s=10' },
    { id: '063', nombre: 'Ketorolaco', presentacion: 'Tableta', concentracion: '10mg', categoria: 'Analgésico', stock: 385, stockMin: 100, precioUnidad: 7.40, precioCaja: 222.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLbCAXeezx7wixgSR0ZGx0R6sEi4vtxoIghV-chVWFsg&s=10' },
    { id: '064', nombre: 'Ketorolaco', presentacion: 'Inyección', concentracion: '30mg/ml', categoria: 'Analgésico', stock: 175, stockMin: 50, precioUnidad: 12.80, precioCaja: 12.80, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKuUenoFZs8V_n1Q2vq53JSg7WeHvbDT14W55wUx7l6g&s=10' },
    { id: '065', nombre: 'Levofloxacino', presentacion: 'Tableta', concentracion: '500mg', categoria: 'Antibiótico', stock: 74, stockMin: 100, precioUnidad: 15.60, precioCaja: 468.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgh6Bt_uL_AtQ67Dox0akteGPlDwlbJYjkjSXfpisRSQ&s=10' },
    { id: '066', nombre: 'Lidocaína', presentacion: 'Inyección', concentracion: '2%', categoria: 'Analgésico', stock: 240, stockMin: 50, precioUnidad: 8.40, precioCaja: 8.40, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Uw_SbuAtPPkJZbIUH2akOPsmJLqE2aeVONXSQZtJCQ&s=10' },
    { id: '067', nombre: 'Lisinopril', presentacion: 'Cápsula', concentracion: '10mg', categoria: 'Antihipertensivo', stock: 700, stockMin: 100, precioUnidad: 4.80, precioCaja: 144.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh2kpVdtrs_n8Mi7aDAhBj6YqvQujb3bnXFdAfHyA3QQ&s=10' },
    { id: '068', nombre: 'Lisinopril', presentacion: 'Tableta', concentracion: '20mg', categoria: 'Antihipertensivo', stock: 520, stockMin: 100, precioUnidad: 5.60, precioCaja: 168.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAsYjLwe-ZE7-xHL6T6Igt5Z4lFcxFLtXdQ9dmi2rzww&s=10' },
    { id: '069', nombre: 'Loratadina', presentacion: 'Tableta', concentracion: '10mg', categoria: 'Antiinflamatorio', stock: 680, stockMin: 100, precioUnidad: 3.20, precioCaja: 96.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ2PerkrHLMTBvLe5Kl1kqvquVWaCV10vEpMgQleQ8ww&s=10' },
    { id: '070', nombre: 'Loratadina', presentacion: 'Jarabe', concentracion: '5mg/5ml', categoria: 'Antiinflamatorio', stock: 340, stockMin: 50, precioUnidad: 7.40, precioCaja: 7.40, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScA6T-gmtNEvxkXfPYXYcNU0NcT5Y9clbugVdtuE6bGw&s=10' },
    { id: '071', nombre: 'Losartán', presentacion: 'Tableta', concentracion: '50mg', categoria: 'Antihipertensivo', stock: 415, stockMin: 100, precioUnidad: 4.75, precioCaja: 142.50, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0DRWp9stl8J5C9I0_8ELXWwTfN3ccHXUb2pfm6559uQ&s=10' },
    { id: '072', nombre: 'Metformina', presentacion: 'Tableta', concentracion: '850mg', categoria: 'Antidiabético', stock: 680, stockMin: 100, precioUnidad: 3.20, precioCaja: 96.00, unidadesCaja: 30, imagen: 'https://www.enviatabsaexpress.com/_uploads/productos/full/Metfomina%20850_30%20caps-328.jpg' },
    { id: '073', nombre: 'Metformina', presentacion: 'Tableta', concentracion: '500mg', categoria: 'Antidiabético', stock: 820, stockMin: 100, precioUnidad: 2.80, precioCaja: 84.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Mp1WLBeGxQW5F8LM-Hpvd4RGLE2DYfzMzGWD_2kI2g&s=10' },
    { id: '074', nombre: 'Metronidazol', presentacion: 'Tableta', concentracion: '500mg', categoria: 'Antibiótico', stock: 560, stockMin: 100, precioUnidad: 3.80, precioCaja: 114.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJD9rWj6XZ3qerzhGPxXJEzsWu3JwrerIjuvWrCDSIA&s=10' },
    { id: '075', nombre: 'Metronidazol', presentacion: 'Suspensión', concentracion: '250mg/5ml', categoria: 'Antibiótico', stock: 325, stockMin: 50, precioUnidad: 6.90, precioCaja: 6.90, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXc7zIV5MUROJwokhByL9EFoR42VggAC-9fMvqAbbomA&s=10' },
    { id: '076', nombre: 'Montelukast', presentacion: 'Tableta', concentracion: '10mg', categoria: 'Respiratorio', stock: 644, stockMin: 100, precioUnidad: 8.90, precioCaja: 267.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgnoTeezXI62yBvZW-dhIybg1m3pPOkeMyY42SiACd8A&s=10' },
    { id: '077', nombre: 'Montelukast', presentacion: 'Tableta', concentracion: '5mg', categoria: 'Respiratorio', stock: 420, stockMin: 100, precioUnidad: 7.20, precioCaja: 216.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSapFwOth3ro4wRtC2Pnv9paeLXDdQK_6IhHKAFSwuHsA&s=10' },
    { id: '078', nombre: 'Morfina', presentacion: 'Inyección', concentracion: '10mg/ml', categoria: 'Analgésico', stock: 799, stockMin: 20, precioUnidad: 15.40, precioCaja: 15.40, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG9TUaDwOG7f8kk2UAzm9-AJzqEYJkNzxWMYRSGUzMWQ&s=10' },
    { id: '079', nombre: 'Morfina', presentacion: 'Tableta', concentracion: '30mg', categoria: 'Analgésico', stock: 340, stockMin: 30, precioUnidad: 12.80, precioCaja: 384.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMC8Ue-m8pGpJDpf6JDqhtT9ikJlrvSCKMdtiTT0rN3w&s=10' },
    { id: '080', nombre: 'Naproxeno', presentacion: 'Tableta', concentracion: '500mg', categoria: 'Analgésico', stock: 363, stockMin: 50, precioUnidad: 4.20, precioCaja: 126.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQODzkDcJUJzEwL0leL5RIXyhKmULNHTVttWAocNx_TiQ&s=10' },
    { id: '081', nombre: 'Naproxeno', presentacion: 'Suspensión', concentracion: '125mg/5ml', categoria: 'Analgésico', stock: 198, stockMin: 50, precioUnidad: 7.80, precioCaja: 7.80, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhJgVi-NmcHgW939fncsaHcljtKAYXZDkpCkEYvMoaDg&s=10' },
    { id: '082', nombre: 'Nifedipino', presentacion: 'Tableta', concentracion: '10mg', categoria: 'Antihipertensivo', stock: 689, stockMin: 100, precioUnidad: 5.10, precioCaja: 153.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp9HjJz3Do6rotA9B0OND6Zkd77M6AoL4VwMzlhluTyQ&s=10' },
    { id: '083', nombre: 'Nifedipino', presentacion: 'Cápsula', concentracion: '30mg', categoria: 'Antihipertensivo', stock: 380, stockMin: 50, precioUnidad: 7.80, precioCaja: 234.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOoQK0P7ziDZReioL7ts7SCqCSMMKqh1rNcXs2Vp28vQ&s' },
    { id: '084', nombre: 'Omeprazol', presentacion: 'Cápsula', concentracion: '20mg', categoria: 'Gastrointestinal', stock: 520, stockMin: 100, precioUnidad: 3.80, precioCaja: 114.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWIKHhz1fgcJduFjcLDIovWlzLvrxpa0JCAENZ5IbYBg&s=10' },
    { id: '085', nombre: 'Omeprazol', presentacion: 'Cápsula', concentracion: '40mg', categoria: 'Gastrointestinal', stock: 380, stockMin: 100, precioUnidad: 5.40, precioCaja: 162.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQULU1QkRyRl-yQSwtIvEqZcqezvXjSzYVvhiE6V_8kgw&s=10' },
    { id: '086', nombre: 'Ondansetrón', presentacion: 'Jarabe', concentracion: '4mg/5ml', categoria: 'Gastrointestinal', stock: 424, stockMin: 50, precioUnidad: 13.20, precioCaja: 13.20, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRME0F4JVa-DqpJOazHMWWMKjghpkIbPas-5wv9SXNVXw&s=10' },
    { id: '087', nombre: 'Ondansetrón', presentacion: 'Tableta', concentracion: '8mg', categoria: 'Gastrointestinal', stock: 265, stockMin: 50, precioUnidad: 9.40, precioCaja: 282.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6b960W1HFWXlabMujsZSFy1N9uV9rSQ-5_sst22Fwsw&s=10' },
    { id: '088', nombre: 'Paracetamol', presentacion: 'Tableta', concentracion: '500mg', categoria: 'Analgésico', stock: 920, stockMin: 100, precioUnidad: 2.20, precioCaja: 66.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvyTLDYzWwEAZi3iD_SvpaKlPebLu6uR3OHjvgU8BEaQ&s=10' },
    { id: '089', nombre: 'Paracetamol', presentacion: 'Suspensión', concentracion: '120mg/5ml', categoria: 'Analgésico', stock: 480, stockMin: 50, precioUnidad: 5.80, precioCaja: 5.80, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReeVkkT54_QOkpl86Ww4A2o98RCjs-obJb6UrFwtWk0A&s=10' },
    { id: '090', nombre: 'Penicilina', presentacion: 'Inyección', concentracion: '1,000,000 UI', categoria: 'Antibiótico', stock: 155, stockMin: 30, precioUnidad: 9.20, precioCaja: 9.20, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwkZCbqhm3mXg41ZfFzXdgCRIuyp-NbP24EOpwHaUJTw&s=10' },
    { id: '091', nombre: 'Prednisona', presentacion: 'Tableta', concentracion: '20mg', categoria: 'Antiinflamatorio', stock: 460, stockMin: 100, precioUnidad: 3.90, precioCaja: 117.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXRrmAmm9UN0iijJ12t1-MRVfslMkFO8z7ECd0tkbKA&s=10' },
    { id: '092', nombre: 'Ranitidina', presentacion: 'Tableta', concentracion: '150mg', categoria: 'Gastrointestinal', stock: 520, stockMin: 100, precioUnidad: 3.40, precioCaja: 102.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS13kAbtrvEfLhdJiDInKORWnNcX0jvaaxEUC4jAUilMA&s=10' },
    { id: '093', nombre: 'Salbutamol', presentacion: 'Inhalador', concentracion: '100mcg', categoria: 'Respiratorio', stock: 280, stockMin: 30, precioUnidad: 32.60, precioCaja: 32.60, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSKEOtiZJbHdFejnegGpeLGFpzGTrUuN7zSc1puY4mjg&s=10' },
    { id: '094', nombre: 'Salbutamol', presentacion: 'Jarabe', concentracion: '2mg/5ml', categoria: 'Respiratorio', stock: 210, stockMin: 50, precioUnidad: 7.80, precioCaja: 7.80, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8V5lzojE8s-qj2JP7wmdOEZf4DZJKaoAcOYlb49a-Q&s=10' },
    { id: '095', nombre: 'Sulfametoxazol', presentacion: 'Tableta', concentracion: '800/160mg', categoria: 'Antibiótico', stock: 340, stockMin: 100, precioUnidad: 4.60, precioCaja: 138.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbhJKKLjnS9x3a8MZsKtZ8QSifoekl_RIch8PHV8DT2Q&s' },
    { id: '096', nombre: 'Tetraclicina', presentacion: 'Cápsula', concentracion: '250mg', categoria: 'Antibiótico', stock: 267, stockMin: 100, precioUnidad: 8.20, precioCaja: 246.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8UOxGDAy74_wQp27g85OyMRDo5s7gXLa1y3OMtEvmJQ&s=10' },
    { id: '097', nombre: 'Tetraclicina', presentacion: 'Jarabe', concentracion: '100mg/5ml', categoria: 'Antibiótico', stock: 690, stockMin: 50, precioUnidad: 9.50, precioCaja: 9.50, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRV5x-wTCFz17dnN1AxsbBg9qry4ETpQ9s2TYTnta-oA&s=10' },
    { id: '098', nombre: 'Tetraclicina', presentacion: 'Inyección', concentracion: '50mg/ml', categoria: 'Antibiótico', stock: 703, stockMin: 100, precioUnidad: 12.30, precioCaja: 12.30, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_DJ1oT8z-9qQTqRdvmCL2wyS8c0ACIccl_0FE_qtUyg&s=10' },
    { id: '099', nombre: 'Tetraclicina', presentacion: 'Suspensión', concentracion: '200mg/5ml', categoria: 'Antibiótico', stock: 921, stockMin: 100, precioUnidad: 8.75, precioCaja: 8.75, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUg-wBOBtvvzJgr2I-pUIZwRT2GZLqv-wSzNxFYcmZyA&s=10' },
    { id: '100', nombre: 'Tetraclicina', presentacion: 'Tableta', concentracion: '500mg', categoria: 'Antibiótico', stock: 256, stockMin: 100, precioUnidad: 6.40, precioCaja: 192.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADGp_plt2DvDKf5JZYXIv7pvwV0qSue-pePb1MOVr-A&s=10' },
    { id: '101', nombre: 'Valsartán', presentacion: 'Suspensión', concentracion: '80mg/5ml', categoria: 'Antihipertensivo', stock: 859, stockMin: 100, precioUnidad: 8.20, precioCaja: 8.20, unidadesCaja: 1, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsaQlQYGnK3F8IIDhuuPwbnoe4IsT4OWKzStVRno90iA&s=10' },
    { id: '102', nombre: 'Valsartán', presentacion: 'Tableta', concentracion: '160mg', categoria: 'Antihipertensivo', stock: 620, stockMin: 100, precioUnidad: 6.80, precioCaja: 204.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjRhIHrFVT-2X9vezE8qqozhDXUyANFpe9tf4YFF5Lyg&s=10' },
    { id: '103', nombre: 'Warfarina', presentacion: 'Tableta', concentracion: '5mg', categoria: 'Antihipertensivo', stock: 280, stockMin: 50, precioUnidad: 4.90, precioCaja: 147.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOsTtY3kDHUuNYA4mAYZqW7So4mnDBugBOr265CMYeIw&s=10' },
    { id: '104', nombre: 'Zolpidem', presentacion: 'Tableta', concentracion: '10mg', categoria: 'Analgésico', stock: 195, stockMin: 50, precioUnidad: 8.40, precioCaja: 252.00, unidadesCaja: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBriKtZAqsbgll779juoZ8OqqC9i9GQnorYWaqWHuKOg&s=10' }
];

// ============================================================
// FUNCIÓN: Imagen del medicamento
// ============================================================
function getImagenMedicamento(m) {
    return m.imagen || 'img/escudo.png';
}

// ============================================================
// RENDERIZAR TABLA
// ============================================================
function renderTabla(filtro = '') {
    const tbody = document.getElementById('tablaMedicamentos');
    if (!tbody) return;
    tbody.innerHTML = '';

    const texto = filtro.toLowerCase().trim();
    const listaFiltrada = medicamentos.filter(m =>
        m.nombre.toLowerCase().includes(texto) ||
        m.presentacion.toLowerCase().includes(texto) ||
        m.concentracion.toLowerCase().includes(texto) ||
        m.categoria.toLowerCase().includes(texto)
    );

    if (listaFiltrada.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding:40px; color:#9ca3af;">No se encontraron medicamentos.</td></tr>`;
        return;
    }

    listaFiltrada.forEach(m => {
        let estadoClase = 'disponible';
        let estadoTexto = 'Disponible';
        if (m.stock === 0) { estadoClase = 'agotado'; estadoTexto = 'Agotado'; }
        else if (m.stock <= m.stockMin) { estadoClase = 'stock-bajo'; estadoTexto = 'Stock bajo'; }

        const imgSrc = getImagenMedicamento(m);

        const precioCajaTexto = m.unidadesCaja > 1
            ? `Caja: <strong>Q ${m.precioCaja.toFixed(2)}</strong> <span style="color:#9ca3af;">(${m.unidadesCaja} und)</span>`
            : `Caja: <strong>Q ${m.precioCaja.toFixed(2)}</strong> <span style="color:#9ca3af;">(1 und)</span>`;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="id-cell">${m.id}</td>
            <td>
                <div class="name-cell">
                    <img src="${imgSrc}" alt="${m.nombre}" onerror="this.src='img/escudo.png'">
                    <span>${m.nombre}</span>
                </div>
            </td>
            <td>${m.presentacion}</td>
            <td>${m.concentracion}</td>
            <td>${m.categoria}</td>
            <td>${m.stock}</td>
            <td class="precios-cell">Unid: <strong>Q ${m.precioUnidad.toFixed(2)}</strong><br>${precioCajaTexto}</td>
            <td><span class="badge-status ${estadoClase}">${estadoTexto}</span></td>
            <td>
                <div class="action-buttons">
                    <button class="btn-edit" title="Editar" onclick="editarMedicamento('${m.id}')"><i class="fa-solid fa-pen"></i></button>
                    <button class="btn-delete" title="Eliminar" onclick="eliminarMedicamento('${m.id}')"><i class="fa-regular fa-trash-can"></i></button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// ============================================================
// MODAL
// ============================================================
function abrirModal() {
    document.getElementById('modalOverlay').classList.add('active');
    document.getElementById('nombre').focus();
}

function cerrarModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.getElementById('formMedicamento').reset();
}

// ============================================================
// INICIALIZACIÓN
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    renderTabla();
    const buscador = document.getElementById('buscador');
    if (buscador) buscador.addEventListener('input', (e) => renderTabla(e.target.value));

    const form = document.getElementById('formMedicamento');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const nuevo = {
                id: String(medicamentos.length + 1).padStart(3, '0'),
                nombre: document.getElementById('nombre').value,
                presentacion: document.getElementById('presentacion').value,
                concentracion: document.getElementById('concentracion').value,
                categoria: document.getElementById('categoria').value || 'Analgésico',
                stock: parseInt(document.getElementById('stock').value) || 0,
                stockMin: parseInt(document.getElementById('stockMin').value) || 50,
                precioUnidad: parseFloat(document.getElementById('precioUnidad').value) || 0,
                precioCaja: parseFloat(document.getElementById('precioCaja').value) || 0,
                unidadesCaja: parseInt(document.getElementById('unidadesCaja').value) || 1,
                imagen: document.getElementById('imagen').value || 'https://picsum.photos/seed/med' + String(medicamentos.length + 1).padStart(3, '0') + '/80/80'
            };
            medicamentos.push(nuevo);
            renderTabla();
            cerrarModal();
            alert(`✅ Medicamento "${nuevo.nombre}" agregado correctamente.`);
        });
    }

    const overlay = document.getElementById('modalOverlay');
    if (overlay) overlay.addEventListener('click', (e) => { if (e.target === overlay) cerrarModal(); });
});

// ============================================================
// EDITAR / ELIMINAR
// ============================================================
function editarMedicamento(id) {
    const med = medicamentos.find(m => m.id === id);
    if (med) alert(`✏️ Editar: ${med.nombre}\n(Simulación - prototipo)`);
}

function eliminarMedicamento(id) {
    const med = medicamentos.find(m => m.id === id);
    if (med && confirm(`¿Eliminar "${med.nombre}" (${med.presentacion} ${med.concentracion})?`)) {
        medicamentos = medicamentos.filter(m => m.id !== id);
        renderTabla();
        alert('✅ Medicamento eliminado.');
    }
}