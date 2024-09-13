import React from 'react'
import styles from './styles.module.css';
import {QRCodeSVG} from 'qrcode.react';

interface QrCodeProps {
    url: string;
    size: number;
}

function QrCode({url, size}: QrCodeProps) {
  return (
    <div>
        <header className={styles.qrBox}>
            <h1 className={styles.title}>QR Code</h1>
            <QRCodeSVG value={url} size={size}/>
        </header>
    </div>
  )
}

export default QrCode
